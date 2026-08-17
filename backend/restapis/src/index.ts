const express = require('express');
const app = express(
)

app.use(express.json());

app.get("/api/health" , (req,res)=>{
  res.send("hello from server");
})

app.listen(3000,()=>{
  console.log("server is listening");
})

//middleware -> a middleware is a function that sees every request before your route does

app.use( (req,res,next)=>{
  console.log(`${req.method} ${req.url}`);
  next(); //hand off to the next middleware

})

//error handling -> 

app.use((err,req,res,next)=>{
  console.log(err);
  res.status(500).json({error:"something went wrong"})
} )

src/
  index.ts        // app setup, middleware, listen
  routes/
    posts.ts      // express.Router() for /api/posts
  controllers/    // request handling logic
  services/       // business logic (no req/res in here)


