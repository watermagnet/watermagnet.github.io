var posts=["2024/08/13/markdown-test/","2024/08/11/hello-world/","2024/08/12/tips-and-tricks/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };