const express=require('express');

const router=express.Router();

router.use('/product', (req,res,next)=>{
    res.send('<h1>acheived</h1>');
});

module.exports= router;