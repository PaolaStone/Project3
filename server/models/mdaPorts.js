const mongoose = require("mongoose");
const Schema = mongoose.Schema;
mongoose.promise = Promise;
const data = require("../db/seed/mdaPorts")

const mdaPortsSchema = new Schema({
    AirRackName: { 
        type: String, 
        required: true },
    AirRackPort: { 
        type: String, 
        required: true 
    },
    SystemName: { 
        type: String, 
        required: false 
    },
    SystemPort: { 
        type: String, 
        required: false 
    },
    SystemLocation: { 
        type: String, 
        required: false 
    },
    MDAPanelName: { 
        type: String, 
        required: false 
    },
    MDAPort: { 
        type: String, 
        required: false 
    }
    
}, mongoose.set('debug', true));

const mdaPorts = mongoose.model('mdaPorts', mdaPortsSchema);


// mdaPorts.create(data)
//     .then(function(dbmdaPorts) {
//         console.log(dbmdaPorts)
//     })
//     .catch(function(err) {
//         console.log(err.message)
//     })
    
module.exports = mdaPorts;