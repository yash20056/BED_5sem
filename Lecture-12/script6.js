const express=require('express');
const app=express()
let PORT=4800
app.listen(PORT,()=>{
    console.log('server running $(PORT)')
})