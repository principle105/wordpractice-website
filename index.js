require("dotenv").config();

const express = require("express");
const passport = require("passport");
const mongoose = require("mongoose"); 
const session = require("express-session");
const path = require("path");
const cors = require("cors");

require("./passportConfig")(passport);

const app = express();
const PORT = process.env.PORT || 5000;
const Routes = require("./routes");

mongoose.connect(process.env.MONGODB_CONNECTION_STRING, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify: false
});

// app.set("trust proxy", 1);

app.use(session({
  secret: process.env.SECRET,
  name: "website",
  resave: false,
  saveUninitialized: false,
  cookie: {
    maxAge: 60000*60*24,
  }
}));

// Middleware
app.use(passport.initialize());
app.use(passport.session());

app.use(express.json());
app.use(express.urlencoded({
  extended: true
}));
app.use(cors({
  origin: ["http://localhost:3000"],
  credentials: true
}));

// app.use("/",express.static(path.join(__dirname, "/client/build")));
app.use("/api", Routes.API);
app.use("/auth", Routes.Auth);
app.use("/",(req,res) => {
  res.redirect("http://localhost:3000/")
})
// app.get("*", (req,res) =>{
//   res.sendFile(path.join(__dirname+"/client/build/index.html"));
// });

app.listen(PORT, () => {
  console.log("Listening to port", PORT);
});
