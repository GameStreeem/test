const express = require('express');  
const router = express.Router();  
const Post = require('../models/Post');  
  
router.get('/', (req, res) => {  
  res.sendFile(__dirname + '/../public/index.html');  
});  
  
router.get('/get-posts', (req, res) => {  
  Post.find().then((posts) => {  
   res.json(posts);  
  });  
});  
  
module.exports = router;
