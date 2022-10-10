
// Create web server

// const http = require('http');
// const host = '127.0.0.1';
// const port = 3000;
// const server = http.createServer((request,response)=> {
//     response.statusCode = 200;
//     response.setHeader('Content-Type', 'text/plain');
//     response.end('finish');


// });
// server.listen(port,host,()=>{
//     console.log(`http://${host}:${port} istekler geliyor`);
// });


// express server
 
const express = require('express');
const data = require('./data.js')
const server = express();
server.get('/',(request,response)=>{
    response.send('Express gönderimi')
});
server.get('/eczaneler',(request,response)=>{
    response.status(200).json(data)
})
server.listen(3000,()=>{
    console.log('http://localhost:3000 mesaj geldi') }
);