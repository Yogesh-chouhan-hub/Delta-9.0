const express = require("express");
const app = express();
//console.dir(app)
//console.log(app)

let PORT = 3000;

app.get('/',(req,res)=>{
    let {id} = req.query;
    res.send(id);
})

app.listen(PORT,()=>{
    console.log(`App is listining on port ${PORT}`)
})