import http from 'http';
const server = http.createServer((req,res)=>{
    res.end("Good Morning");//webserver
    // request-response cycle 
});

server.listen(8080, ()=>{
    console.log('Server started');//ip address give of another computer to get their data
    // your own laptop localhost 
    // your laptop can act as client and server(more than one server cam run on the same laptop
    //eg localhost:8080 and also run localhost:8081)
    
})

