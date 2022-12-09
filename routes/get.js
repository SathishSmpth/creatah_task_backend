var express = require('express');
var userList = require('../module/schema')
var router = express.Router();

// router.get('/get', (req,res)=>{
//         res.json({
//             data:{
//                 name:'xysbj',
//                 dob:'12-09-2000'
//             }
//         })
// })

router.get('/get', async (req,res)=>{
    try{
        const users = await userList.find()
        res.json({
            data:users
        })
    }catch(e){
        success:false
    }
})



module.exports = router;