const express=require('express');
const app=express();
const port=8000;
const bp = require('body-parser')
const db=require('./config/mongoose');
const Task=require('./models/task');


//use express router
app.use(bp.urlencoded({extended:true}))
app.use('/',require('./routers'));

//use middleware
app.use(express.static('./assets'));

//set up view engine
app.set('view engine', 'ejs');
app.set('views', './views');


  

app.listen(port,function(err){
if(err){
    console.log(`error in running of server;${err}`);
}
console.log(`server is running on port:${port}`);
});