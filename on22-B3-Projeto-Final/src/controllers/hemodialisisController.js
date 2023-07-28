const HemodialisisModel = require("../models/hemodialisisModel");
const createHemodialysisSession = async (req, res) => {
  try {
    const {
      paciente,
      data,
      horario,
      duracao,
      medico,
      enfermeiro,
      observacoes,
    } = req.body;
    const newHemodialisis = new HemodialisisModel({
      paciente,
      data,
      horario,
      duracao,
      medico,
      enfermeiro,
      observacoes,
    });
    const savedNewHemodialisis = await newHemodialisis.save();
    res
      .status(201)
      .json({ message: "Session added successfully!", newHemodialisis });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

const getHemodialysisSessions = async (req, res) => {
  try {
    const sessions = await HemodialisisModel.find().populate("paciente");
    res.json(sessions);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

const updateHemodialysisSession = async (req, res) => {
  try {
    const session = await HemodialisisModel.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    res.json(session);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

const deleteHemodialysisSession = async (req, res) => {
  try {
    await HemodialisisModel.findByIdAndRemove(req.params.id);
    res.json({ message: "Sessão de hemodiálise removida com sucesso!" });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

module.exports = {
  createHemodialysisSession,
  getHemodialysisSessions,
  updateHemodialysisSession,
  deleteHemodialysisSession,
};
