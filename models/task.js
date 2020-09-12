const mongoose=require('mongoose');

const taskSchema=new mongoose.Schema({
    Description:{
        type:String,
        required:true
    },
    Category:{
        type:String,
        required:true
    },
    Date:{
        type:String,
        required:true
    }
});

const Task=mongoose.model('Task',taskSchema);

module.exports=Task;