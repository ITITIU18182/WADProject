const mongoose = require('mongoose');

const PatientSchema = new mongoose.Schema({
    patient_id: { 
        type: String,
        required: true
    },

    patient_name: { 
        type: String,
        required: true
    },

    email: { 
        type: String,
        required: true
    },

    phone: { 
        type: String,
        required: true
    },

    address: { 
        type: String,
        required: true
    },

    age: { 
        type: String,
        required: true
    },

    gender: { 
        type: String,
        required: true
    }
});

module.exports = Patient = mongoose.model('patient', PatientSchema);