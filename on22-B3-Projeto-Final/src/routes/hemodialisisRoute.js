const express = require("express");
const router = express.Router();
const {
  createHemodialysisSession,
  getHemodialysisSessions,
  updateHemodialysisSession,
  deleteHemodialysisSession,
} = require("../controllers/hemodialisisController");

router.post("/add", createHemodialysisSession);
router.get("/", getHemodialysisSessions);
router.put("/:id", updateHemodialysisSession);
router.delete("/:id", deleteHemodialysisSession);

module.exports = router;
