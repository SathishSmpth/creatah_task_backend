var express = require('express')
var userData = require("../module/schema")

var router = express.Router()

router.delete('/delete/:userId', async (req,res)=>{
    try{
        const Delete = await  userData.findByIdAndDelete(req.params.userId)
        res.json({
            success:"true"
        })
    }catch (e){
        console.log(e)
    }
})

module.exports = router;