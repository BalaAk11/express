const mongoose = require('mongoose')

const empSchema = mongoose.Schema({
    name:{type:String,required:true},
    salary:{type:Number,required:true}
})
module.exports=mongoose.model("employee",empSchema)