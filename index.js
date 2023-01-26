const express = require('express')
const morgan = require('morgan')
const mongoose = require('mongoose')
const empSchema =require('./schema')
const cors = require('cors')
const { update } = require('./schema')

const app = express()
app.use(cors())
app.use(express.json())//body parser
app.use(morgan('dev'))

// to send data to server
app.post('/',async(req,res)=>{
    console.log(req.body);
    var data = new empSchema({
        name:req.body.name,
        salary:req.body.salary
    })
    await data.save();
    res.json(data)
})

app.get('/',async(req,res)=>{
    const getData=await empSchema.find()
    res.json(getData)
})

app.put('/update',async(req,res)=>{
    const update= await empSchema.updateOne({
        _id:req.body._id},{
            $set:{name:req.body.name,
            salary:req.body.salary}
        })
    
    res.json(update)
})

app.delete('/delete/:_id',async(req,res)=>{
    const remove = await empSchema.findByIdAndRemove({
      _id:  req.params._id}).then(e=>{
        res.json({message:"deleted successfully"})
      })
    
})

mongoose.connect('mongodb://127.0.0.1:27017/azure',(err)=>{
    if(!err){
        console.log('DB connected successfully');
    }
    else{
        console.log('Not connected');
    }
})
app.listen(4000,()=>console.log('server starting on 4000'))