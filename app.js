const express = require('express');
const app = express()

app.get('/',(req,res)=>res.send('hello world'));

app.listen (3000,() =>{
    console.log('my first API running on port 3000');
})
