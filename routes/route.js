//jshint esversion:6
const express = require("express");
const router = express.Router();

const controllers = require("../Controllers/DBcontroller");

router.get("/", (req, res) => {
  res.write("Please specify an operation in your URL!");
  res.write(" e.g. http://hostname/create");
  res.send();
});

router.get("/create", controllers.create);           // Create a document
router.get("/read", controllers.read);               // Read all documents
router.get("/read/:name", controllers.read);         // Read a specified document
router.get("/update/:name", controllers.update);     // Update a specified document
router.get("/delete/:name", controllers.delete);     // Delete a specified document

router.get("/*", (req, res) => {
  res.send("CRUD Operation invalid: Check your input! or check README for valid inputs");
});

module.exports = router;