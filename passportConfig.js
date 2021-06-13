const DiscordStrategy = require("passport-discord");
const User = require("./database/User");

module.exports = function (passport) {
  passport.serializeUser((user,done) => {
    done(null,user.user_id);
  });

  passport.deserializeUser(async (user_id, done) => {
    try {
      const user = await User.findOne({user_id});
      return user ? done(null,user): done(null,null);
    } catch(err) {
      console.log(err);
      return(err,null);
    }
  });

  passport.use(
    new DiscordStrategy({
      clientID: process.env.CLIENT_ID,
      clientSecret: process.env.CLIENT_SECRET,
      callbackURL: process.env.CLIENT_CALLBACK_URL,
      scope: ["identify"]
    }, async (accessToken, refreshToken, profile, done) => {
      const {id,username,avatar,discriminator} = profile;
      try {
        const findUser = await User.findOne({user_id: id});
        if (findUser) {
          return done(null,findUser)
        } else {
          const newUser = await User.create({
            user_id: id,
            username,
            discriminator,
            avatar
          });
          return done(null,newUser)
        }
      } catch(err) {
        console.log(err);
        return done(err,null);
      }
    })
  )
}