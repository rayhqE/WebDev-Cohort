import express from "express";
import type { Router } from "express";

import AuthController from "./controller.js";
import { restrictToAuthenticatedUser } from "../middleware/auth-middleware.js";

const authController = new AuthController();

export const authRouter: Router = express.Router();

authRouter.post("/sign-up", authController.handleSignup.bind(authController));
authRouter.post("/sign-in", authController.handleSignin.bind(authController));
authRouter.get(
  "/me",
  restrictToAuthenticatedUser(),
  authController.handleMe.bind(authController),
);
