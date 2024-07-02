const http = require("http")
const fs =require("fs");
const { url } = require("inspector");
const { error } = require("console");

const myServer = http.createServer((req,res)=>{
    const log =`${Date.now()}: ${req.url} :new request is recived\n`;
    fs.appendFile("log.txt", log, (err,data)=>{
        switch(req.url){
            case '/' :res.end("Homepage");
            break;
            case '/about' :res.end('i am Rajan chaudhary');
            break ;
            default : 
            res.end("404 not found") 


        }
    
    })
})

myServer.listen(8000,()=>console.log("server is started sucessfully"));


