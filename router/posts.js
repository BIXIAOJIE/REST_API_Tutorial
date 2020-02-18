const express = require('express');
const Post = require('../model/post');
const router = express.Router();


// Get Back All The Post
router.get('/', async (req, res) => {
  try {
    const posts = await Post.find();
    res.json(posts)

  } catch (error) {
    res.json({ message: error })
  }
});

// router.post('/',(req,res)=>{
//   const post = new Post({
//     title:req.body.title,
//     description:req.body.description
//   });

//   post.save()
//     .then(data => {
//       res.json(data)
//     })
//     .catch(err => {
//       res.json({message : err})
//     })
// });

// 使用 async await

router.post('/', async (req, res) => {
  const post = new Post({
    title: req.body.title,
    description: req.body.description
  })

  try {
    const savedPost = await post.save()
    res.json(savedPost)
  } catch (error) {
    res.json({ message: err })
  }

})

//SPECIFIC POST

router.get('/:postId', async (req, res) => {
  try {
    const post = await Post.findById(req.params.postId);
    res.json(post)
  } catch (error) {
    res.json({ message: error })
  }

})

router.delete('/:postId', async (req, res) => {
  try {
    const removePost = await Post.remove({ _id: req.params.postId });
    res.send(removePost)
  } catch (error) {
    res.json({ message: error })
  }

})

router.patch('/:postId', async (req, res) => {
  try {
    const updatePost = await Post.updateOne({ _id: req.params.postId }, { $set: { title: req.body.title } })
    res.json(updatePost)
  } catch (error) {
    res.json({ message: error })
  }
})

module.exports = router


