import express from "express";
import {
  getCommunity,
  postCommunityWrite,
} from "../controllers/healthController";
import routes from "../routes";

const communityRouter = express.Router();

communityRouter.get(routes.home, getCommunity);
communityRouter.get(routes.todolist, getCommunity);
communityRouter.get(routes.routine, getCommunity);
communityRouter.post(routes.writeCommunity, postCommunityWrite);

export default communityRouter;
