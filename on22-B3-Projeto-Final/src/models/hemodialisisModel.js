const mongoose = require("mongoose");
const hemodialysisSessionSchema = new mongoose.Schema({
  _id: {
    type: mongoose.Schema.Types.ObjectId,
    default: () => new mongoose.Types.ObjectId(),
  },
  paciente: {
    type: mongoose.Schema.Types.ObjectId, //objectId pode ser substituido por .name mas na logica de
    required: true,
    ref: "Patient", //fazendo a referencia dele o console e games para usar no .populate
  },
  data: { type: String, required: true },
  horario: { type: String, required: true },
  duracao: { type: String, required: true },
  medico: { type: String },
  enfermeiro: { type: String },
  observacoes: { type: String },
});

const HemodialysisSession = mongoose.model(
  "HemodialysisSession",
  hemodialysisSessionSchema
);

module.exports = HemodialysisSession;
