var express = require("express");
var studentData = require("../module/schema");
var router = express.Router();

router.get("/get/:userId", async (req, res) => {
  try {
    console.log("------>", req.body);
    const studentDetails = await studentData.findById(req.params.userId);
    res.json(studentDetails);
  } catch (e) {
    success: false;
  }
});

module.exports = router;
