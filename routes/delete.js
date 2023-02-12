var express = require('express')
var studentData = require("../module/schema")

var router = express.Router()

router.delete('/delete/:userId', async (req,res)=>{
    try{
        const Delete = await studentData.findByIdAndDelete(req.params.userId)
        res.json(true)
    }catch (e){
        console.log(e)
    }
})

module.exports = router;