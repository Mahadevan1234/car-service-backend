const express=require("express")
const carmodel=require("../models/carModel")

const router=express.Router()

router.post("/add",async(req,res)=>{
    let data=req.body
    let service=carmodel(data)
    let result=await service.save()
    res.json({
        status:"success"
    })
})

module.exports=router