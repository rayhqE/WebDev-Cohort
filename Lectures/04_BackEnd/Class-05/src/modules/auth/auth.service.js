import ApiError from "../../common/utils/api-error.js";
import crypto, { hash } from "crypto";

import {
  generateAccessToken,
  generateRefreshToken,
  generateResetToken,
  verifyRefreshToken,
} from "../../common/utils/jwt.utils.js";
import User from "./auth.model.js";
import { sendVerificationMail } from "../../common/config/email.js";

const hashToken = (token) =>
  crypto.createHash("sha256").update(token).digest("hex");

const register = async (name, email, password, role) => {
  //do user registration
  const existing = await User.findOne({ email });
  if (existing) throw ApiError.conflict("Email already exists");

  const { rawToken, hashedToken } = generateResetToken();

  const user = await User.create({
    name,
    email,
    password,
    role,
    verificationToken: hashedToken,
  });
  //  TODO: send an email to user with token: rawtoken

  try {
    await sendVerificationMail(email, token);
  } catch (error) {
    console.error(error);
  }

  const userObj = user.toObject();
  delete userObj.password;
  delete userObj.verificationToken;

  return userObj;
};

const login = async ({ email, password }) => {
  //

  const user = await User.findOne({ email }).select("+password");
  if (!user) throw ApiError.unauthorized("Invalid email or password");

  //somehow i will check password
  const isMatch = await user.comparePassword(password);
  if (!isMatch) throw ApiError.unauthorized("Invalid email or password");

  if (!user.isVerified) {
    throw ApiError.forbidden("Please verify your email before login");
  }
  const accessToken = generateAccessToken({ id: user._id, role: user.role });
  const refreshToken = generateRefreshToken({ id: user.id });
  user.refreshToken = hashToken(refreshToken);
  await user.save({ validateBeforeSave: false });

  const userObj = user.toObject();
  delete userObj.password;
  delete userObj.refreshToken;

  return { user: userObj, accessToken, refreshToken };
};

const refresh = async (token) => {
  if (!token) throw ApiError.unauthorized("Refresh Token missing");
  const decoded = verifyRefreshToken(token);

  const user = await User.findById(decoded.id).select("+refreshToken");
  if (!user) throw ApiError.unauthorized("User not found!");

  if (user.refreshToken !== hashToken(token)) {
    throw ApiError.unauthorized("Invalid Refresh Token!");
  }

  const accessToken = generateAccessToken({ id: user._id, role: user.role });
  const refreshToken = generateRefreshToken({ id: user.id });

  user.refreshToken = hashToken(refreshToken);
  await user.save({ validateBeforeSave: false });

  const userObj = user.toObject();
  delete userObj.password;
  delete userObj.refreshToken;
  return { user: userObj, accessToken, refreshToken };
};

const logout = async (userId) => {
  // const user = await User.findById(userId).select("+refreshToken");
  // if (!user) throw ApiError.unauthorized("User not found!");

  // user.refreshToken = undefined;
  // await user.save({ validateBeforeSave: false }) ;

  await User.findByIdAndUpdate(userId, { refreshToken: null });
};

const forgotPassword = async (email) => {
  const user = await User.findOne({ email });
  if (!user) throw ApiError.notfound("No account with that email");
  const { rawToken, hashedToken } = generateResetToken();
  user.resetPasswordToken = hashedToken;
  user.resetPasswordExpires = Date.now() + 15 * 60 * 1000;
  await user.save();

  //TODDOD: mail bhejna nahi ata
};

const verifyEmail = async (token) => {
  const hashedToken = hashToken(token);
  const user = await User.findOne({ verificationToken: hashedToken }).select(
    "+verificationToken",
  );
  if (!user) ApiError.notfound("Invalid or expired verification token");
  user.isVerified = true;
  user.verificationToken = undefined;
  await user.save({ validateBeforeSave: false });
  return user;
};

const getMe = async (userId) => {
  const user = await User.findById(userId);
  if (!user) throw ApiError.notfound("User not found");
  return user;
};

export { register, login, refresh, logout, forgotPassword, getMe, verifyEmail };
