document.querySelector("#button1").addEventListener("click", getText);
document.querySelector("#button2").addEventListener("click", getJson);
document.querySelector("#button3").addEventListener("click", getApi);




function getText() {
    fetch("text.txt").then((res) => {
        return res.text();
    }).then(function (data) {
        console.log(data);
    }).catch((err) => {
        console.log(err);
    });
}

function getJson() {
    fetch("Fetch.json").then((res) => {
        return res.json();
    }).then((data) => {
        let output = "";
        data.forEach(post => {
            output += `<li>${post.Name}</li>`;
            output += `<li>${post.Age}</li>`;
            output += `<li>${post.Email}</li>`;
        });
        document.querySelector(".output").innerHTML = output;
    }).catch((err) => {
        console.log(err);
    })
}

function getApi() {
    fetch("http://api.github.com/users").then((res)=>{
        return res.json();
    }).then((data)=>{
        let output = "";
        data.forEach(user => {
            output += `<li>${user.login}</li>`
        });
        document.querySelector(".output").innerHTML = output;
    }).catch((err)=>{
        console.log(err);
    });
}