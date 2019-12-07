const db = require("../models");

module.exports = {
  getmdas: (req, res) => {
    db.mdaPorts.find({"SystemName" : ""}).exec((err, mdas) => {
      if(err) {
        return res.json();
      }
      return res.json ({mdas})
    })
  }
}
