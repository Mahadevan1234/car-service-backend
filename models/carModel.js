const mongoose=require("mongoose")

const carschema=new mongoose.Schema(
    {
        carMaker:String,
        carModel:String,
        carType:String,
        carYear:String,
        serviceDate:String,
        mobile:String
    }
)

module.exports=mongoose.model("service",carschema)