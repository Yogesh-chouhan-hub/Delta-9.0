const express = require('express')
const app = express();
const port = 3000;

app.set('view engine','ejs');
app.get('/',(req,res)=>{
    let ran = Math.random()
    res.render("index",{ran});
})

app.listen(port,()=>{
    console.log("app is listening on port 3000");
})