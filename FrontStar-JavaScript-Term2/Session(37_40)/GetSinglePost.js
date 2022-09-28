let http = new EasyHttp();
let posts = http.getPosts("https://jsonplaceholder.typicode.com/posts/10",function(err,posts){
 if(err) {
    console.log(err);
 }else {
    console.log(posts);
 }
});