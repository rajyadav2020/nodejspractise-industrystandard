const express = require('express');
const { title } = require('process');

const router = express.Router();

let posts = [
    { id: 1, title: "post one" },
    { id: 2, title: "post two" },
    { id: 3, title: "post three" },
    { id: 4, title: "post four" },
];

// Get all posts
router.get('/', (req, res) => {
    const limit = parseInt(req.query.limit);

    if (!isNaN(limit) && limit > 0) {
        res.json(posts.slice(0, limit));
    } else {
        res.json(posts);
    }
});

// Get a single post
router.get('/:id', (req, res) => {
    const id = parseInt(req.params.id);

    const post = posts.find((post) => post.id === id);

    if (!post) {
        return res.status(404).json({ msg: "post not found" });
    }

    res.status(200).json(post);
});

//create new post

router.post('/',(req,res)=>{
  const newpost = {
    id:posts.length+1,
    title :req.body.title
  };

  if(!newpost.title)
  {
    return res.status(400).json({msg:"please include a title"})
  }

  posts.push(newpost);
  res.status(201).json(posts);
})

//update the post

router.put('/:id',(req,res)=>{
  const id = parseInt(req.params.id);
  const post = posts.find((post) => post.id === id );

  if(!post)
  {
    return res.status(404).json({msg:"post not found"});
  }

  post.title = req.body.title;
  res.status(200).json(post)
})


//delete post


router.delete('/:id', (req, res) => {
  const id = parseInt(req.params.id);

  const post = posts.find((post) => post.id === id);

  if (!post) {
      return res.status(404).json({ msg: "post not found" });
  }

  posts = posts.filter((post) => post.id !== id);

  res.status(200).json(post);
});

module.exports = router;