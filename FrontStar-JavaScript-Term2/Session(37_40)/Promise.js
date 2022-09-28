let posts = [{
    title: "First Post",
    body: "This is first Post"
}, {
    title: "Second Post",
    body: "This is second Post"
}];

function createPost(post) {
    return new Promise(function(resolve,reject){
        setTimeout(() => {
            posts.push(post);
            resolve();
        },2000);
    });
}

function 
getPosts() {
  
    setTimeout(()=>{
        let output = "";
        posts.forEach(post => {
            output += `<li>${post.title}</li>`;
        });
        document.body.innerHTML = output;
    },1000);
}
createPost({title:"Post Three",body :"This is Third post"}).then(getPosts);
