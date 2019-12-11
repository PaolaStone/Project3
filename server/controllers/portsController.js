const db = require("../models");


module.exports = {
  getPorts: function (req, res) {
    db.allPorts.find({ Status: { $ne: "Open" } } ).exec((err, allPorts) => {
      if (err) {
        return res.json();
      }
      return res.json ({allPorts})
    })
    
  },
  findById: function(req,res) {
    db.allPorts
      .findById(req.params.id)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err))
  },
  update: function (req, res, next) {
    db.allPorts
      .findByIdAndUpdate(req.params.id, req.body, function (err,post){
          if (err) return next(err)
          // console.log("POST!!!!!!!!!!!!!!!!!! ", post)
          // db.allPorts.findById(req.params.id, (err, response) => {
          //   console.log("RESPONSE!!! ", response)
          // })
          db.allPorts.find({ Status: { $ne: "Open" } } ).exec((err, allPorts) => {
            if (err) {
              return res.json();
            }
            console.log('all ', allPorts)
            return res.json ({allPorts})
          })
          // res.json(post)
          // console.log(res)
          // console.log("it made it to controllers")

      })
     
},


  getOpens: function (req, res) {
    db.allPorts.find({"Status" : "Open"}).exec((err, opens) => {
      if (err) {
        return res.json();
      }
      return res.json ({opens})
    })
  },
  getmdas: function (req, res) {
    db.mdaPorts.find({"SystemName" : ""}).exec((err, mdas) => {
      if(err) {
        return res.json();
      }
      return res.json ({mdas})
    })
  }
}
