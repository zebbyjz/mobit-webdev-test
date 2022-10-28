const express = require("express");
const Model = require("../models/model");

const router = express.Router();

router.post("/post", async (req, res) => {
  //Destructuring incoming object to variables
  let {
    Name: name,
    Email: email,
    "Mobile Number": mobileNumber,
    Age: age,
  } = req.body;

  //Constructing Model object
  let data = new Model({
    Name: name,
    Email: email,
    "Mobile Number": mobileNumber,
    Age: age,
  });

  try {
    const dataToSave = await data.save();
    res.status(200).json(dataToSave);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});




//getUsers
//returns All users if empty name query attached or no name query provided
//returns specific user if name query provided

router.get("/getUsers", async (req, res) => {
  if (!req.query.name) {
    try {
      const data = await Model.find();
      res.json(data);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  } else {
    try {
      let nameToFind = req.query.name;
      const data = await Model.find().where("Name").equals(nameToFind);
      res.json(data);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }
});

module.exports = router;
