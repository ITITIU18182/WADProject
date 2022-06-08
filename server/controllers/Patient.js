const Patient = require("../models/Patient.js");

const getPatient = async (req, res) => {
    try {
        const patient = Patient.find();

        res.status(200).json(patient);
    } catch (error) {
        res.status(404).json({ message: error.messages });
    }

    
}

const createPatient = async (req, res) => {
    const home = req.body;

    const newPatient = new Patient(home);
    try {
        await newPatient.save();
        res.status(200).json(newPatient);

    } catch (error) {
        res.status(409).json({ message: error.messages });
    }
}

module.exports = getPatient;
module.exports = createPatient;