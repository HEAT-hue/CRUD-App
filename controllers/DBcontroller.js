//jshint esversion:6
const PersonModel = require("../models/peopleSchema");

// CREATE OPERATION CONTROLLER
module.exports.create = function(req, res){
  PersonModel.create(req.body)
  .then(() => {                 // saved successfully
    res.json({
      message: "Doc: " + (req.body.name) +  " saved successfully",
      data: req.body
    });
  })
  .catch((err) => {             // could not save
    res.status(500).json({
      message: err.message,
      data: req.body  
    });
  });
};

// READ OPERATION CONTROLLER
module.exports.read = function(req, res){
  const queryName = req.params.name;
  const searchQuery = {name: queryName};

  // determine what to display to the client
  const projection = { name: 1, email: 1, country: 1, _id: 0};    

  if (!queryName) {
    PersonModel.find({"__v": 0}, projection, (err, person) => {
      if (err) {
        res.status(500).json({message: err.message});
      }
      else {
        res.json({
          message: "All Docs found!",
          data: person
        });
      }
    });
  }

  else {
    PersonModel.findOne(searchQuery, projection, (err, person) => {
      if (err) {
        res.status(500).json({message: err.message});
      }
      else if (!person) {                 // no match found
        res.json({message: "No person with name: " + queryName + " found!"});
      }
      else {
        res.json({
          message: "Doc: " + (person.name) +  " found!",
          data: person
        });
      }
    });
  }
};


// UPDATE OPERATION CONTROLLER
module.exports.update = function(req, res) {
  const queryName = req.params.name;
  const searchQuery = {name: queryName};

  PersonModel.updateOne(searchQuery, req.body, (err, person) => {
    if (err) {
      res.status(500).json({message: err.message});
    }
    else if (!person.n) {                 // no match found
      res.json({message: "No person with name: " + queryName + " found!"});
    }
    else {
      res.json({
        message: "Doc: " + (queryName) +  " updated successfully",
        data: req.body
      });
    }
  });
};


//DELETE OPERATIONS
module.exports.delete = function(req, res){
  const queryName = req.params.name;
  const searchQuery = {name: queryName};

  PersonModel.deleteOne(searchQuery, (err, person) => {
    if (err) {
      res.status(500).json({message: err.message});
    }
    else if (person.n == 0) {         // no match found
      res.json({message: "No person with name: " + queryName + " found!"});
    }
    else {
      res.json({message: "Doc: " + (queryName) +  " deleted successfully"});
    }
  });
};