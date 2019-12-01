const db = require("../models");


module.exports = {
  getmdaPorts: (req, res) => {
    db.mdaPorts.find().exec((err, mdaPorts) => {
      if (err) {
        return res.json();
      }
      return res.json ({mdaPorts})
    })
  }
}
