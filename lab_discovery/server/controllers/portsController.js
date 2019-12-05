const db = require("../models");


module.exports = {
  getPorts: (req, res) => {
    db.allPorts.find({ Status: { $ne: "Open" } } ).exec((err, allPorts) => {
      if (err) {
        return res.json();
      }
      return res.json ({allPorts})
    })
  }
}
