const express = require("express")
const path = require("path");
const app = express();
const port = 8080;

app.use(express.urlencoded({extended : true}));
app.use(express.json());
app.set("view engine","ejs");

app.set("views",path.join(__dirname,"views"))
app.set(express.static(path.join(__dirname,"public")));
//Public for css rendering 
//while view for ejs templates
//app.set("folder-name",path.join(__dirname,"folder-name"))


let posts = [
    {
        username : 'Yogesh chouhan',
        content : 'i am iron man...'
    },
    {
        username : 'Jyoti chouhan',
        content : 'Yohohohohohoho...'
    },
    {
        username : 'Tilak chouhan',
        content : 'Hardest choices require strongest will...'
    },
    {
        username : 'Renu chouhan',
        content : 'Hardest choices has to be made for the success...'
    }
]


app.get('/posts',(req,res)=>{
    res.render("index.ejs",{posts});
})


app.listen(port,()=>{
    console.log("Server listening on port 8080");
})