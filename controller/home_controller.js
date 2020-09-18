let  Task=require('../models/task');

//module.exports.home=function(req,res){
  //  return res.end('<h1>express is up for codial<h1>');
  //  return res.render('home',{
    // title:"TODO APP",
   // });


    module.exports.home=function(req,res){
   Task.find({},function(err,addedTasks){
    if(err){
        console.log('error in fetching task from database');
        return;
    }
    res.render('home',{
      title:"Todo-App",
      task_list:addedTasks
    });
});
    
}

  
module.exports.create=function(req,res){
  Task.create({
      Description:req.body.description,
      Category:req.body.category,
      Date:req.body.duedate,
      Time:req.body.duetime,
  },function(err,newTask){
   if(err){
       console.log('error in creating new task',err);
       return;
   }
   console.log('****',newTask);
   res.redirect('back');
  });
}




 module.exports.delete=function(req,res){
  // id=req.params.id;
  
  id=req.body.id;
   //id=req.query.id;
   console.log("rr",req.body)

  Task.findByIdAndDelete(id,function(err){

     if(err){
       console.log('Error in deleting an list from database',err);
       return;
     }
     return res.redirect('back');
  });

}



