let http = new EasyHTTP();
let data = {
    title: "Yashar",
    body: "Talat"
};
http.post("https://jsonplaceholder.typicode.com/posts", data, function (err, post) {
    if (err) {
        console.log(err);
    } else {
        console.log(post);
    }
});