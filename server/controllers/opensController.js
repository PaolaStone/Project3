const db = require("../models");


module.exports = {
    getOpens: (req, res) => {
    db.allPorts.find({"Status" : "Open"}).exec((err, opens) => {
      if (err) {
        return res.json();
      }
      return res.json ({opens})
    })
  }
}