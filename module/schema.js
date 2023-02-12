const mongoose = require("mongoose");

const studentDetails = {
    name:String,
    email:String,
    dob:String,
    phone:Number,
    gender:String
}


const student = mongoose.model("studentsDetails", studentDetails )


module.exports = student;