const mongoose = require("mongoose");
const patientSchema = new mongoose.Schema({
  nome: { type: String, required: true },
  cpf: { type: String, required: true, unique: true },
  data_nascimento: { type: String, required: true },
  endereco: { type: String },
  telefone: { type: String },
  email: { type: String },
  numero_sus: { type: String, required: true, unique: true },
});

const Patient = mongoose.model("Patient", patientSchema);

module.exports = Patient;
