let http = new EasyHTTP();

http.delete("https://jsonplaceholder.typicode.com/posts/2",function(err,response){
    if(err) {
        console.log(err);
    }else {
        console.log(response);
    }
});