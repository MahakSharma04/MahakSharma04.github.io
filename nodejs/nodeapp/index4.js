import express from 'express'
const app = express()
app.listen(8080, ()=>{
    console.log("Server started")
})

const auth = (req, res, next)=>{//middleware
    if(req.params.name==="cathy"){
        res.send("Access Denied");
    }else{
        next();//actual endpoint will be called(or next function)
    }
};

//app.use(auth); use this only when auth middleware is to be applied to all routes

app.get("/",(req,res)=>{
    res.send("Hello World");
})

app.get("/:name", auth, (req,res)=>{//for a specific route ,auth no app.use(auth) we give
    res.send("Hello World");
})