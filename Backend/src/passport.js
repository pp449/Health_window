import passport from "passport";
import kakaoStrategy from "passport-kakao";
import User from "src/model/User";

passport.use(User.createStrategy());

passport.use(new kakaoStrategy({
    clientId:
    callbackURL:
}))

passport.serializeUser(function (user, done){
    done(null, user);
});

passport.deserializeUser(function (id, done){
    User.findById(id, function(err,user){
        done(err, user);
    })
})