// jshint esversion:6
const express = require("express");
const routes = require("./routes/route");
const mongoose = require("mongoose");

// Get environment variables
require("dotenv").config();

// PORT number
const PORT = process.env.PORT || 3000;

// DB credentials
[username, password] = [process.env.DB_USER, process.env.DB_PASS];

// Connection URL to DB
const url = "mongodb+srv://" + username + ":" + password + "@mycluster.or2ld.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";

// Connect to local DB
mongoose.connect(url, {
  useNewUrlParser: true,
  useFindAndModify: false,
  useUnifiedTopology: true
})
.then(() => {
  console.log("Connection to DB: Success!");
})
.catch((err) => {
  console.log("Couldn't connect to DB: " + err);
});

// Init express application
const app = express();

// Init express middleware
app.use(express.json());
app.use(express.urlencoded({extended: true}));

// Init route handlers
app.use(routes);

// Close DB connection upon App termination
process.on("SIGINT", () => {
  console.log("DB connection closed!");
  mongoose.connection.close();
  process.exit(0);
});

// Listen for requests
app.listen(PORT, () => {
  console.log("Server running on port:", PORT);
});