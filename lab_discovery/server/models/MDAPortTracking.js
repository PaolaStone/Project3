const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const MDAPortTrackingSchema = new Schema({
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
    },
    
});

const MDAPortTracking = mongoose.model("MDAPortTracking", MDAPortTrackingSchema);

module.exports = MDAPortTracking;