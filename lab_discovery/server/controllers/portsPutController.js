const db = require("../models");

module.exports = {
    findById: function(req, res) {
        db.allPorts
        .findById(req.params.id)
        .then(dbModel => res.json(dbModel))
        .catch(err => res.status(422).json(err))
    },
    update: function(req, res) {
        db.allPorts
          .findOneAndUpdate({ _id: req.params.id }, req.body)
          .then(dbModel => res.json(dbModel))
          .catch(err => res.status(422).json(err));
      }
}