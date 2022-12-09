var express = require('express')
var usersList = require('../module/schema')
var router = express.Router()


router.post('/login',async (req,res)=>{
try{
    
    var loginCd = await usersList.findOne({ email:req.body.email,password:req.body.password})
    console.log(loginCd);
    if(loginCd){
        if(loginCd.email == req.body.email && loginCd.password == req.body.password){
            res.json({
                data:loginCd
            })
        }else{
            res.json({
                data:{
                    status:"Email or password Was Incorrect"
                }
            })
            console.log(data);
        }
    }else{
        res.json({
  
                status:0

        })
    }
}catch(e){
console.log(e);
}
})

module.exports = router;