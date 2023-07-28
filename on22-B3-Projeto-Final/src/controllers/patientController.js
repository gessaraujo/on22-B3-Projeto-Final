const PatientModel = require("../models/patientModel");

const createPatient = async (req, res) => {
  try {
    const {
      nome,
      cpf,
      data_nascimento,
      endereco,
      telefone,
      email,
      numero_sus,
    } = req.body;
    const newPatient = new PatientModel({
      nome,
      cpf,
      data_nascimento,
      endereco,
      telefone,
      email,
      numero_sus,
    });
    const savedNewPatient = await newPatient.save();
    res.status(201).json({
      message: "New patient added successfuly!",

      newPatient,
    });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

const getPatients = async (req, res) => {
  try {
    const patients = await PatientModel.find();
    res.json(patients);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

const updatePatient = async (req, res) => {
  try {
    const patient = await PatientModel.findByIdAndUpdate(
      req.params.id,
      req.body,
      {
        new: true,
      }
    );
    res.json(patient);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

const deletePatient = async (req, res) => {
  try {
    await PatientModel.findByIdAndRemove(req.params.id);
    res.json({ message: "Paciente removido com sucesso!" });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

module.exports = {
  createPatient,
  getPatients,
  updatePatient,
  deletePatient,
};
