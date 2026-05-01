const { error } = require("console");
const express = require("express")
const path = require("path");
const {v4:uuidv4} = require("uuid")
const methodOverride = require('method-override');

const app = express();
const port = 8080;

app.use(express.urlencoded({extended : true}));
app.use(express.json());
app.use(methodOverride('_method'))

app.set("view engine","ejs");
app.set("views",path.join(__dirname,"views"))
app.use(express.static(path.join(__dirname,"public")));
//Public for css rendering 
//while view for ejs templates
//app.set("folder-name",path.join(__dirname,"folder-name"))


let posts = [
    {
        id:uuidv4(),
        username: 'Yogesh chouhan',
        content: 'i am iron man...'
    },
    {
        id:uuidv4(),
        username: 'Jyoti chouhan',
        content: 'Yohohohohohoho...'
    },
    {
        id:uuidv4(),
        username: 'Tilak chouhan',
        content: 'Hardest choices require strongest will...'
    },
    {
        id:uuidv4(),
        username: 'Renu chouhan',
        content: 'Hardest choices has to be made for the success...'
    }
]


app.get('/posts',(req,res)=>{
    res.render("index.ejs",{posts});
})


app.get('/post/new',(req,res)=>{
    res.render("new.ejs");
})

app.post('/posts',(req,res)=>{
    let {username,content} = req.body;
    let id = uuidv4();
    posts.push({id,username,content});
    res.redirect("/posts"); // bydefault get request....
})

app.get('/posts/:id',(req,res)=>{
    let {id} = req.params;
    let post = posts.find((p)=>id === p.id)
    if (post){
        res.render("show.ejs",{post});
    }else{
        res.send(`<h1>User does'nt exist....</h1>`)
    }
    //let post = posts.find((p)=>{
    //return id === p.id;
    //})
})

app.get('/posts/:id/edit',(req,res)=>{
    let {id} = req.params;
    let post = posts.find((p)=>id === p.id)
    if (post){
        res.render("edit.ejs",{post});
    }else{
        res.send(`<h1>User does'nt exist....</h1>`)
    }
})

app.patch('/posts/:id/edit',(req,res)=>{
    let {id} = req.params;
    let newUsername = req.body.username;       
    let newContent = req.body.content;

    let post = posts.find((p)=> id === p.id)
    if(post){
        post.content = newContent;
        post.username = newUsername;
        res.redirect('/posts');
    }else{
        res.send('user doesnt exist in database');
    }
    
    // let posts = posts.filter((p)=> id !== p.id);
})

app.delete('/posts/:id/delete',(req,res)=>{
    let {id} = req.params;
    posts = posts.filter((p)=>id !== p.id);
    res.redirect('/posts');

})

app.listen(port,()=>{
    console.log("Server listening on port 8080");
})