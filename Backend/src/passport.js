import passport from "passport";
import kakaoStrategy from "passport-kakao";
import localStrategy from "passport-local";
import bcrypt from "bcrypt";
import { ExtractJwt, Strategy as JWTStrategy } from "passport-jwt";
import { kakaoLoginCallback } from "./controllers/userController";
import User from "./models/User";

export const passportConfig = {
  usernameField: "email",
  passwordField: "password",
};

const verifyUser = async (email, password, done) => {
  console.log("verify");
  try {
    const user = await User.findOne({ email });
    if (!user) {
      done(null, false, { message: "존재하지 않는 사용자 입니다." });
      return;
    }
    const compareResult = await bcrypt.compare(password, user.password);

    if (compareResult) {
      done(null, user);
      return;
    }
    done(null, false, { reason: "올바르지 않은 비밀번호 입니다." });
  } catch (error) {
    console.error(error);
    done(error);
  }
};

const JWTConfig = {
  jwtFromRequest: ExtractJwt.fromHeader("authorization"),
  secretOrKey: "qwe",
};

const JWTVerify = async (jwtPayload, done) => {
  try {
    // payload의 id값으로 유저의 데이터 조회
    const user = await User.findOne({ _id: jwtPayload.id });
    // 유저 데이터가 있다면 유저 데이터 객체 전송
    if (user) {
      done(null, user);
      return;
    }
    // 유저 데이터가 없을 경우 에러 표시
    done(null, false, { reason: "올바르지 않은 인증정보 입니다." });
  } catch (error) {
    console.error(error);
    done(error);
  }
};

passport.use("jwt", new JWTStrategy(JWTConfig, JWTVerify));
passport.use("local", new localStrategy(passportConfig, verifyUser));

passport.serializeUser(function (user, done) {
  done(null, user);
});

passport.use(
  new kakaoStrategy(
    {
      clientID: "7f2ca697a56d2a90a6d626f94c02c51d",
      callbackURL: `http://localhost:4000/auth/kakao/callback`,
    },
    kakaoLoginCallback
  )
);
