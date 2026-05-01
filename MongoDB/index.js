const mongoose = require('mongoose');

// mongoose.connect('mongodb://127.0.0.1:27017/test')

main().then(()=>{
    console.log('Connection Successfully Done...')
})
.catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/test');
}

const userSchema = new mongoose.Schema({
    name : String,
    email : String,
    age : Number
})

const User = mongoose.model('User',userSchema);

// const user1 = new User({
//     name : "Prem Singh",
//     email : "Prem@gmail.com",
//     age : 22
// })

// user1.save().then((res)=>{
//     console.log('Saved successfully'+ res)
// }).catch(err =>{
//     console.log(err);
// }); //return promise


// User.insertMany([
//     {name:'yogesh chouhan',email:'yogesh@gmail.com',age:23},
//     {name:'tilak chouhan',email:'tilak@gmail.com',age:27},
//     {name:'mohan yadav',email:'mohan@gmail.com',age:17},
// ]).then(res =>{
//     console.log(res);
// }).catch((err)=>{
//     console.log(err);
// })


// User.find({name : 'yogesh chouhan'}).then((res)=>{
//     console.log(res);
// }).catch((err)=>{
//     console.log(err);
// })


// User.find({}).then((res)=>{
//     console.log(res);
// }).catch((err)=>{
//     console.log(err);
// })
// User.find({}).then((res)=>{
//     console.log(res[0].name);
// }).catch((err)=>{
//     console.log(err);
// })


// User.updateOne({name:'yogesh chouhan'},{age : 24}).then((res)=>{
//     console.log(res)
// }).catch((err)=>{
//     console.log(err)
// })
// User.updateMany({age :{$gt:13}},{age : 24}).then((res)=>{
//     console.log(res) 
// }).catch((err)=>{
//     console.log(err)
// })