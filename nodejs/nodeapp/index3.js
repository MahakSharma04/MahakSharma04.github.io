import express from 'express';
//writing code using express framewok=rk not like old createserver
const app = express();

app.listen(8083,()=>{
    console.log('server started');
})

// app.get('/', (req, res)=>{
//     res.send("Good Morning");
// })

//if you'll use node.js then you have to start the server again and agin after making chnages 
//for that you will use nodemon
//api= application programming interface...through this we can data on browser
//api is the whole code for url we are writing that what this url will give 
//postman is a tool to test apis(don't have to go on browser and type the url)
//endpoint is the url which is used on browser

// app.get("/user", (req, res)=>{
//     res.send("Hello User");
// })

// app.get("/ab*cd", (req, res)=>{//ab123fdvdhvcd will work(wildcard)
//     res.send("Hello Abcd");
// })

// app.get("/products", (req,res)=>{
//     res.status(201).json({name: "product 1",price: 45});
// });

//url fixed this endpoint name is fixed
const products =[
    {id: 1, name: "product 1",price: 45},
    {id: 2, name: "product 2",price: 45},
    {id: 3, name: "product 3",price: 45},
];

app.get("/products", (req,res)=>{ 
    res.json(products);
});

app.get("/products/:id", (req,res)=>{ 
    const pid=req.params.id;
    res.status(201).json(products.find((product)=>product.id==pid));
});


// app.get("/:name",(req, res)=>{// name is a parameter(variable)
//     res.send(req.params.name);
// })

// app.get("/student/:name/age/:age",(req, res)=>{
//     res.send(req.params.name+ req.params.age);
// })

// app.get("/", (req,res)=>{
//     res.send(req.headers.authorization);
// })

// app.get("/", (req,res)=>{
//     res.send(req.query.name+ req.query.age);//localhost:8083/?name=john&age=21
// })