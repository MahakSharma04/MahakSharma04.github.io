import express from 'express';
const app = express();
app.listen(8080,(req,res)=>{
    console.log("Server started");
})

app.use(express.json());
let users=[
    {name:"Mahak",email:"mahaksharma1104@gmail.com", pass:"yes"},
    {name:"Rahi",email:"rahi1967@gmail.com", pass:"yes"},
    {name:"Arti",email:"arti4567@gmail.com", pass:"yes"}
]
app.post("/",(req,res)=>{
    const {name, email, pass} = req.body;
    const obj = {
        name, email, pass   
    };
    products.push(obj);
    res.json({message: "User created" });
});

app.get("/",(req, res)=>{
    res.json(users);
});

app.get("/register",(req,res)=>{
    users.push(req.body);
    res.json({message: "user registeres successfullly"});
})

app.get("/login",(req, res)=>{
    const {email,pass}= req.body;
    const user = users.find(user => user.email === email && user.pass===pass);
    if(user){
        res.json({message: "Login successful", user});
    }else{
        res.status(401).json({message: "Invalid credentials"});
    }
})


