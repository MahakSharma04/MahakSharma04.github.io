import express from 'express';
const app = express();
app.use("/images", express.static("images"));//like this we made just to make it more meaningful

//app.use(express.static("images"));
app.use(express.static("public"));//static to use it otherwise access of files is not allowed

app.listen(8080, ()=>{
    console.log("Hello World");
});
app.get("/products",(req,res)=>{
    res.send("Product List");
});

