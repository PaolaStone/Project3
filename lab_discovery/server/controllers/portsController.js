const db = require("../models");

// Defining methods for the userController
module.exports = {
  getPorts: (req, res) => {
    db.allPorts.find().exec((err, allPorts) => {
      if (err) {
        return res.json();
      }
      return res.json ({allPorts})
    })
  }
}
