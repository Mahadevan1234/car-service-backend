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

router.get("/viewall",async(req,res)=>{
    let data=await carmodel.find()
    res.json(data)
})

router.post("/search",async(req,res)=>{
    let input=req.body
    let data=await carmodel.find(input)
    res.json(data)
})

module.exports=router