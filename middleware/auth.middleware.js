import passport from "passport";
import { Strategy as LocalStrategy } from "passport-local";
import { userModel } from "../models/user.model.js";

passport.use(
  new LocalStrategy(async (username, password, done) => {
    try {
      const user = await userModel.findOne({ username: username });
      if (!user) return done(null, false, { message: "User not found" });

      const isPassword = await user.isCompared(password);

      if (isPassword) {
        return done(null, user);
      } else {
        return done(null, false, { message: "password incorrect" });
      }
    } catch (error) {
      return done(error);
    }
  })
);

export default passport;
