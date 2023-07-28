const patientController = require("../controllers/patientController");
const express = require("express");
const router = express.Router();

router.post("/add", patientController.createPatient);
router.get("/", patientController.getPatients);
router.put("/:id", patientController.updatePatient);
router.delete("/:id", patientController.deletePatient);

module.exports = router;
