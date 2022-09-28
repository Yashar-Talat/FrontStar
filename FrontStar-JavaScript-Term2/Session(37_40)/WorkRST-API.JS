let http = new EasyHTTP();

//get all posts
let posts = http.getPosts("https://jsonplaceholder.typicode.com/posts", function(err, posts)
{
    if(err){
        console.log(err);
    }else{
        console.log(posts);
    }
});