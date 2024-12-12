const loginForm = document.getElementById('login-form');  
const adminContent = document.getElementById('admin-content');  
const postsDiv = document.getElementById('posts');  
  
loginForm.addEventListener('submit', (e) => {  
  e.preventDefault();  
  const passcode = document.getElementById('passcode').value;  
  fetch('/admin/login', {  
   method: 'POST',  
   headers: { 'Content-Type': 'application/json' },  
   body: JSON.stringify({ passcode })  
  })  
  .then((res) => res.json())  
  .then((data) => {  
   if (data.success) {  
    adminContent.style.display = 'block';  
    loginForm.style.display = 'none';  
    fetch('/admin/get-posts')  
    .then((res) => res.json())  
    .then((posts) => {  
      postsDiv.innerHTML = '';  
      posts.forEach((post) => {  
       const postDiv = document.createElement('div');  
       postDiv.classList.add('post');  
       postDiv.innerHTML = `  
        <h2>${post.title}</h2>  
        <p>${post.content}</p>  
       `;  
       postsDiv.appendChild(postDiv);  
      });  
    });  
   } else {  
    alert('Invalid passcode');  
   }  
  });  
});  
  
fetch('/get-posts')  
.then((res) => res.json())  
.then((posts) => {  
  postsDiv.innerHTML = '';  
  posts.forEach((post) => {  
   const postDiv = document.createElement('div');  
   postDiv.classList.add('post');  
   postDiv.innerHTML = `  
    <h2>${post.title}</h2>  
    <p>${post.content}</p>  
   `;  
   postsDiv.appendChild(postDiv);  
  });  
});
