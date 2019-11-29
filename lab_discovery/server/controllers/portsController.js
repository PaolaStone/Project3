const db = require("../models");

// Defining methods for the userController
module.exports = {
  getPorts: (req, res) => {
    db.allPorts.find().exec((err, allPorts) => {
      if (err) {
        return res.json({"success" :false, "message" : "SOme error"});
      }
      return res.json ({"success" :true, "message": "allPOrts fetched susscesfulle", allPorts})
    })
  }
} 


// module.exports = {
//   getPorts: (req, res) => {
//     console.log("is it connecting?");
//     if (req.port) {
//       return res.json({ port: req.port });
//     }
//   }
// }


