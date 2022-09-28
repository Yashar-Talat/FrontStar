let http = new EasyHTTP();
let data = {
    title: "Yashar",
    body: "Talat",
    age: 19
};
http.put("https://jsonplaceholder.typicode.com/posts/5",data, function (err, post) {
    if (err) {
        console.log(err);
    } else {
        console.log(post);
    }
});