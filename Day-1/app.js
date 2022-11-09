// const http = require("http");
import http from 'http';
const server = http.createServer((req,res)=>{
  res.end('got respond');
});

server.listen(8000,"127.0.0.1",()=>{
  console.log("listening to the port no 8000");
});