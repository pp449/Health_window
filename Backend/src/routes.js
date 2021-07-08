//global
const HOME = "/";
const LOGIN = "/login";
const JOIN = "/join";
const LOGOUT = "/logout";
const CHANGE_PASSWORD = "/change-password";
const LOGGED_USER = "/loggedUser";

//Kakao

const KAKAO = "/auth/kakao";
const KAKAO_CALLBACK = "/auth/kakao/callback";

//Github

const GITHUB = "/auth/github";
const GITHUB_CALLBACK = "/auth/github/callback";

const routes = {
  home: HOME,
  login: LOGIN,
  join: JOIN,
  logout: LOGOUT,
  changePassword: CHANGE_PASSWORD,
  kakao: KAKAO,
  kakaoCallback: KAKAO_CALLBACK,
  loggedUser: LOGGED_USER,
};

export default routes;
