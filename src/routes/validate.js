const express = require("express");
const router = express.Router();

router.post("/panCard", async (req, res) => {
  try {
    const { idNumber, idType } = req.body;
    var result;
    if (idType === "panCard") {
      const panPattern = /^[A-Z]{5}\d{4}[A-Z]$/;
      result = panPattern.test(idNumber);
    }
    console.log(result);
    res.status(200).send({
      success: true,
      result,
    });
  } catch (error) {
    res.status(500).send({
      success: false,
      error,
    });
  }
});

router.post("/voterCard", async (req, res) => {
  try {
    const { idNumber, idType } = req.body;
    var result;
    if (idType === "panCard") {
      const voterIdPattern = /^[A-Z]{3}[0-9]{7}$/;
      return voterIdPattern.test(idNumber);
    }
    console.log(result);
    res.status(200).send({
      success: true,
      result,
    });
  } catch (error) {
    res.status(500).send({
      success: false,
      error,
    });
  }
});

module.exports = router;
