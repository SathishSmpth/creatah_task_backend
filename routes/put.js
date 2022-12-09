var express = require("express")
var userData = require('../module/schema')

var router = express.Router()

router.put('/put/:userId', async(req,res)=>{
    try{
        var putData = await userData.findByIdAndUpdate(req.params.userId,req.body)
        res.json({
            success:"true"
        })
    }catch (e) {
        console.log(e)
    }
})

module.exports = router;