const express = require("express");
const mongoose = require("mongoose");
const passport = require("passport");
const session = require("express-session");

const routes = require("./routes");
const PORT = process.env.PORT || 3001;

const app = express();

require("./config/passport")(passport);
app.use(passport.initialize());
app.use(passport.session());

// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(session({secret:"kitty-cat"}));
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}
// Add routes, both API and view
app.use(routes);

// Connect to the Mongo DB
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/envelopes_db");

// Start the API server
app.listen(PORT, function() {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});
