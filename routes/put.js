var express = require("express")
var studentData = require('../module/schema')

var router = express.Router()

router.put('/put/:userId', async(req,res)=>{
    try{
        var putData = await studentData.findByIdAndUpdate(req.params.userId,req.body)
        res.json(true)
    }catch (e) {
        console.log(e)
    }
})

module.exports = router;