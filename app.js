const express = require('express');  
const app = express();  
const mongoose = require('mongoose');  
const Post = require('./models/Post');  
const adminRoutes = require('./routes/admin');  
const indexRoutes = require('./routes/index');  
  
mongoose.connect('mongodb://localhost/blog', { useNewUrlParser: true, useUnifiedTopology: true });  
  
app.use(express.static('public'));  
app.use(express.json());  
app.use(express.urlencoded({ extended: true }));  
  
app.use('/admin', adminRoutes);  
app.use('/', indexRoutes);  
  
app.listen(3000, () => {  
  console.log('Server started on port 3000');  
});
