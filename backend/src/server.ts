import http from 'http'


const server = http.createServer((req,res)=>{
  if(req.url === '/' && req.method === 'GET')
  {
    res.end("hell from the server");
  }
} )

server.listen(3000, ()=>{
  console.log("hello server is running ")
})