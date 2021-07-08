import passport from "passport";
import routes from "../routes";
import User from "../models/User";

export const loggedUser = (req, res) => {
  if (req.user) {
    res.send(true);
  } else {
    res.send(false);
  }
};

export const postJoin = async (req, res, next) => {
  const {
    body: { id, pw },
  } = req;
  try {
    const user = await User({
      username: id,
      password: pw,
    });
    await User.register(user, pw);
    next();
  } catch (error) {
    console.log(error);
    res.redirect(routes.home);
  }
};

export const postLogin = passport.authenticate("local", {
  failureRedirect: routes.login,
  successRedirect: routes.home,
});

export const logout = (req, res) => {
  req.logout();
  req.session.save();
};

export const kakaoLogin = passport.authenticate("kakao");

export const postKakaoLogin = (req, res) => {
  res.redirect(routes.home);
};

export const kakaoLoginCallback = async (_, __, profile, cb) => {
  const {
    _json: { id, avatar_url: avatarUrl, name, email },
  } = profile;
  try {
    const user = await User.findOne({ email });
    if (user) {
      user.kakaoId = id;
      user.save();
      return cb(null, user);
    }
    const newUser = await User.create({
      email,
      name,
      kakaoId: id,
      avatarUrl,
    });
    return cb(null, newUser);
  } catch (error) {
    return cb(error);
  }
};
