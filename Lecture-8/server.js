const express = require ("express");
const app = express();

app.get("/",(req,res)=>{
    console.log(req);
    // res.send("hello world") //text
    // res.send("<h1>hello world</h1>") //html
    res.json({
        name:"yash",
        address:"patiala",
        isLogin:true
    })
    
})

app.get("/user/:id",(req,res)=>{
    console.log(req.params.id);
    let id = req.params.id;
    res.send(id);
    
})

app.listen(6969,()=>{
    console.log("server started");
})