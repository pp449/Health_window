import express from "express";
import passport from "passport";
import routes from "../routes";
import {
  logout,
  getLogin,
  postJoin,
  postLogin,
  postKakaoLogin,
  loggedUser,
  kakaoLogin,
} from "../controllers/userController";

const globalRouter = express.Router();

globalRouter.post(routes.join, postJoin, postLogin);
globalRouter.post(routes.login, postLogin);

globalRouter.get(routes.kakao, kakaoLogin);
globalRouter.get(
  routes.kakaoCallback,
  passport.authenticate("kakao", { failureRedirect: "/login" }),
  postKakaoLogin
);

globalRouter.get(routes.loggedUser, loggedUser);
globalRouter.get(routes.logout, logout);

export default globalRouter;
