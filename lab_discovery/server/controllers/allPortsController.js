const db = require("../models");

// Defining methods for the allPortsController
module.exports = {
  getallPorts: (req, res, next) => {
    console.log(req.allPorts);
    if (req.allPorts) {
      return res.json({ allPorts: req.allPorts });
      console.log("THis is allPorts" + allPorts)
    } 
    // else {
    //   return res.json({ allPorts: null });
    // }
  },
  
};