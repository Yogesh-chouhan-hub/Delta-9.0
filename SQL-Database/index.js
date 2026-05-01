const { faker } = require('@faker-js/faker');
const mysql = require('mysql2');
const {v4 : uuidv4} = require('uuid');
const path = require('path');
const express = require('express');
const app = express();
const port = 9999;

app.set('view engin','ejs')
app.set('views',path.join(__dirname,'views'))
app.use(express.static(path.join(__dirname,'public')))
app.use(express.urlencoded({exrended : true}))
app.use(express.json());


//Database connectivity....
let getRandomUser=()=> {
  return [
     faker.string.uuid(),
     faker.internet.username(),
     faker.internet.email(),
     faker.internet.password(),
  ]
}

// let Data = [];
// let Q = "INSERT INTO user (id,username,email,password) VALUES ?"

// for (let i = 1; i<=100; i++) {
//   Data.push(getRandomUser());
// }

const connection = mysql.createConnection({
    host:'localhost',
    user:'root',
    database:'Delta_app',
    password:'yogesh@#$78%'
});

// try {
//     connection.query(Q,[Data],(err,result)=>{
//         if(err) throw err;
//         console.log(`Successfully Connected`);
// })
// } catch (err) {
//     console.log(err);
// }

// connection.end();

//Server Routes....

app.get('/',(req,res)=>{
  let q = `Select count(*) FROM user`;
  try {
    connection.query(q,(err,result)=>{
      if(err) throw err;
      res.send(result);
    })
  } catch (error) {
    console.log(err);
    res.send("Something Went Wrong...");
  }
})

app.listen(port,()=>{
  console.log("Server listening at port 9999");
})
