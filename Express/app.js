const express = require("express");
const app = express();
//console.dir(app)
//console.log(app)

let PORT = 3000;

app.get('/:id',(req,res)=>{
    let {id} = req.params;
    res.send(`${id} was the param request...`);
})

app.listen(PORT,()=>{
    console.log(`App is listining on port ${PORT}`)
})