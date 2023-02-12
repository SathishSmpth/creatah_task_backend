const mongoose = require("mongoose");

const studentImages = new mongoose.Schema({
    image: {
      data: Buffer,
      contentType: String
    }
  });


const studentImg = mongoose.model("studentImages", studentImages )


module.exports = studentImg;