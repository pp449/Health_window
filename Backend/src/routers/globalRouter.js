import express from "express";
import passport from "passport";
import routes from "../routes";
import {
  postJoin,
  postChangePassword,
  postLogin,
  postKakaoLogin,
  kakaoLogin,
} from "../controllers/userController";
import {auth} from "../middleware"

const globalRouter = express.Router();

globalRouter.post(routes.join, postJoin, postLogin);
globalRouter.post(routes.login, postLogin);
globalRouter.post(routes.changePassword,auth, postChangePassword);

globalRouter.get(routes.kakao, kakaoLogin);
globalRouter.get(
  routes.kakaoCallback,
  passport.authenticate("kakao", { failureRedirect: "/login" }),
  postKakaoLogin
);

export default globalRouter;
