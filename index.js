const express=require('express');
const app=express();
const port=8000;

//use express router

app.use('/',require('./routers'));

app.listen(port,function(err){
if(err){
    console.log(`error in running of server;${err}`);
}
console.log(`server is running on port:${port}`);
});