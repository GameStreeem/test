const express = require('express');  
const router = express.Router();  
const Post = require('../models/Post');  
  
let passcode = '1234'; // Change this to a secure passcode  
  
router.get('/', (req, res) => {  
  res.sendFile(__dirname + '/../public/admin.html');  
});  
  
router.post('/login', (req, res) => {  
  if (req.body.passcode === passcode) {  
   res.json({ success: true });  
  } else {  
   res.json({ success: false });  
  }  
});  
  
router.post('/create-post', (req, res) => {  
  const post = new Post({  
   title: req.body.title,  
   content: req.body.content  
  });  
  post.save((err) => {  
   if (err) {  
    console.log(err);  
   } else {  
    res.json({ success: true });  
   }  
  });  
});  
  
router.get('/get-posts', (req, res) => {  
  Post.find().then((posts) => {  
   res.json(posts);  
  });  
});  
  
router.post('/delete-post', (req, res) => {  
  Post.findByIdAndDelete(req.body.id, (err) => {  
   if (err) {  
    console.log(err);  
   } else {  
    res.json({ success: true });  
   }  
  });  
});  
  
module.exports = router;
