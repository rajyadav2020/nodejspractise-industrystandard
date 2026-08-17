import http from 'http'


const server = http.createServer((req,res)=>{
  if(req.url === '/' && req.method === 'GET')
  {
    res.end("hell from the server");
  }

  if(req.url === '/block' && req.method === 'GET')
  {
    console.log("Starting a heavy sync task...");

    let sum = 0;
    for(let i=0;i<10_000_000_000;i++)
    {
      sum+=i;
    }
  }
} )

server.listen(3000, ()=>{
  console.log("hello server is running ")
})