const db = require("../models");


module.exports = {
    findByIdAndUpdate: function (req, res) {
      db.allPorts
        .findByIdAndUpdate({_id: req.params.id}, req.body)
        .then(dbModel => res.json(dbModel))
        .catch(err => res.status(422).json.err)

    }
}
