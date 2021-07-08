import mongoose from "mongoose";
import passportLocalMongoose from "passport-local-mongoose";

const UserSchema = new mongoose.Schema({
  username: String,
  kakaoId: Number,
  password: String,
  avatarUrl: String,
});

UserSchema.plugin(passportLocalMongoose, { usernameField: "username" });
UserSchema.plugin(passportLocalMongoose, { passwordField: "password" });

const model = mongoose.model("User", UserSchema);

export default model;
