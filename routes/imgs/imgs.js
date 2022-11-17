const express = require("express")
const router = express.Router()
const path = require('path');

router.get('/product/:imgFile',(req,res)=>{
    res.sendFile(path.join(__dirname,`../../uploads/${req.params.imgFile}`))
})

module.exports = router