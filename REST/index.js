const { error } = require("console");
const express = require("express")
const path = require("path");
const {v4:uuidv4} = require("uuid")

const app = express();
const port = 8080;

app.use(express.urlencoded({extended : true}));
app.use(express.json());

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

app.get('/posts/update/:id',(req,res)=>{
    let {id} = req.params;
    let post = posts.find((p)=>id===p.id)
    //res.send(post)
    res.render('update.ejs',{post})
})

app.patch('/posts/update/:id',(req,res)=>{
    let {id} = req.params;
    let newContent = req.body.content;
    let post = posts.find((p)=>id === p.id);
    post.content = newContent;
    res.send("update successfully...");
})

app.listen(port,()=>{
    console.log("Server listening on port 8080");
})