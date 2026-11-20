import Team from "../models/team.model.js";
import ApiError from "../../../common/utils/api-error.js";
import Player from "../models/player.model.js";

//Create, read ,update,delete

const transferPlayer = async (playerId, newTeamId) => {
  const team = await Team.findbyId(newTeamId);
  if (!team) {
    throw ApiError.notFound("Team not found");
  }
  const player = await Player.findbyIdAndUpdate(
    playerId,
    {
      teamId: newTeamId,
    },
    { new: true, runValidators: true },
  ).populate("teamId", "name");
  if (!player) {
    throw ApiError.notFound("Player not Found");
  }
  return player;
};

const updatePlayerRole = async (playerId, role) => {
  const player = await Player.findbyIdAndUpdate(
    playerId,
    { role },
    { new: true, runValidators: true },
  ).populate("teamId", "name");
  if (!player) {
    throw ApiError.notFound("Player not Found");
  }
  return player;
};

export { transferPlayer, updatePlayerRole };
