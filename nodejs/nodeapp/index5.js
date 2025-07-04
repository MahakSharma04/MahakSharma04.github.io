import express from 'express';
const app = express()
app.listen(8080,()=>{
    console.log("Server started");
});
app.use(express.json())
let products=[
    {id:1,name:"Nike Air Max", price:120},
    {id:2,name:"adidas tshirt", price:120},
    {id:3,name:"sonata pose", price:120},
    {id:4,name:"Marry me stranger", price:120}
]
app.post("/",(req,res)=>{
    const {id , name, price} = req.body;
    const obj = {
        id,name,price,     
    };
    products.push(obj);
    res.json({message: "Product created" });
});

app.get("/",(req, res)=>{
    res.json(products);
});

app.delete("/:id", (req,res)=>{
    const id= req.params.id;
    products = products.filter((product) => product.id !== id);
    res.json("Product Deleted");
});

