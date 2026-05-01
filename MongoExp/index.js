const express = require('express')
const app = express();
const mongoose = require('mongoose')
const path = require('path')
const Chat = require('./models/chat')
const methodOverride = require('method-override')
const PORT = 9090;

app.use(methodOverride('_method'))
app.use(express.json())
app.use(express.urlencoded({extended : true}))
app.use(express.static(path.join(__dirname,'public')))
app.set('view engine','ejs')
app.set('views',path.join(__dirname,'views'))


main().then(()=>{
    console.log("Connected DB Successfully...");
}).catch((err)=>{
    console.log(err);
})

async function main(){
    await mongoose.connect('mongodb://localhost:27017/whatsapp');
}

let chat1 = new Chat({
    from : 'ujjwal',
    to:'yogesh',
    msg:"See you tomorrow at college",
    created_at: new Date()
})

// chat1.save().then((res)=>{
//     console.log(res);
// }).catch((err)=>{
//     console.log(err);
// }) 

app.get('/chats',async(req,res)=>{
    let chats = await Chat.find()
    // console.log(chats);
    res.render('home.ejs',{chats})
})

app.get('/chats/new',(req,res)=>{
    res.render('addChat.ejs')
})

app.post('/chats/new',(req,res)=>{
    let newFrom = req.body.from;
    let newTo = req.body.to;
    let newMsg = req.body.msg;

    let newChat = new Chat({
        from : newFrom,
        to : newTo,
        msg : newMsg,
        created_at : new Date()
    })
        newChat.save();
        res.redirect('http://localhost:9090/chats');
})


app.get('/chats/update/:id',async(req,res)=>{
    let {id} = req.params;
    let data = await Chat.findById({_id : id})
    console.log(data);
    res.render('update.ejs',{data});
})
app.patch('/chats/update/:id',async(req,res)=>{
    let {id} = req.params;
    let newMsg = req.body.msg;
    let info = await Chat.findByIdAndUpdate({_id : id},{msg:newMsg},{runValidators : true})
    console.log(info);
    res.redirect("/chats");
})
    

app.delete('/chats/:id/delete',(req,res)=>{
    let {id} = req.params;
    Chat.findByIdAndDelete({_id : id}).then((res)=>{
        console.log(res)
    }).catch((err)=>{
        console.log(err);
    })
        res.redirect('http://localhost:9090/chats');
})


app.listen(PORT,()=>{
    console.log("Server is listening on port 9090");
})
