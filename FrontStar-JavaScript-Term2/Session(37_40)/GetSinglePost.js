let http = new EasyHTTP2();

let posts = http.getPosts('https://jsonplaceholder.typicode.com/posts/5',function(err,posts) {
    if(err) {
        console.log(err);
    }else {
        console.log(posts);
    }
});