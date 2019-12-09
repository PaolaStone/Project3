const db = require("../models");


module.exports = {
    // findById: function(req, res) {
    //     db.allPorts
    //       .findById(req.params.id)
    //       .then(dbModel => res.json(dbModel))
    //       .catch(err => res.status(422).json(err));
    // },
    // editPort: function(req, res) {
    //     db.allPorts
    //     .findById({ _id: req.params.id }, req.body)
    //       .then(dbModel => res.json(dbModel))
    //       .catch(err => res.status(422).json(err));
    // },
    findByIdAndUpdate: function (req, res) {
      db.allPorts
        .findByIdAndUpdate({_id: req.params.id}, req.body)
        .then(dbModel => res.json(dbModel))
        .catch(err => res.status(422).json.err)

    }
}
