import express from "express";
import passport from "passport";
import MongoStore from "connect-mongo";
import cors_proxy from "cors-anywhere";
import globalRouter from "./routers/globalRouter";
import session from "express-session";
import routes from "./routes";
import cors from "cors";
import "./passport";

const router = express.Router();

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(
  session({
    secret: "health",
    resave: true,
    saveUninitialized: false,
    store: MongoStore.create({
      mongoUrl: "mongodb://localhost:27017/healthCare",
    }),
  })
);

app.use(passport.initialize());
app.use(passport.session());

router.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "*");
  next();
});

app.use(routes.home, globalRouter);

export default app;
