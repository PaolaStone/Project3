const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const PortsListSchema = new Schema({
    ID: { 
        type: Number, 
        required: true 
    },
    SwitchName: { 
        type: String, 
        required: true 
    },
    Port: { 
        type: String, 
        required: true 
    },
    Status: { 
        type: String, 
        required: true 
    },
    SystemName_Port: { 
        type: String, 
        required: false 
    },
    SystemWWN: { 
        type: String, 
        required: false 
    },
    AirRackName: { 
        type: String, 
        required: false },
    AirRackPort: { 
        type: String, 
        required: false 
    }
});

const PortsList = mongoose.model("PortsList", PortsListSchema);

module.exports = PortsList;