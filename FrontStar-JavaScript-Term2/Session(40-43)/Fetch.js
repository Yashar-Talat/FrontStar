document.querySelector("#button1").addEventListener("click", getText);
document.querySelector("#button2").addEventListener("click", getJSON);
document.querySelector("#button3").addEventListener("click", getAPI);



function getText() {
    fetch("text.txt").then((res) => {
        return res.text();
    }).then((data) => {
        console.log(data);
    }).catch(function (err) {
        console.log(err);
    });
}

function getJSON() {
    fetch("Fetch.json").then((res) => {
        return res.json();
    }).then((data) => {
        let output = "";
        data.forEach(post => {
            output += `<li>Name :${post.Name}</li>`;
            output += `<li>Email :${post.Email}</li>`;
            output += `<li>Age :${post.Age}</li>`;
        });
        document.querySelector(".output").innerHTML = output;
    }).catch((err) => {
        console.log(err);
    });
}

function getAPI() {
    fetch("http://api.github.com/users").then((res) => {
        return res.json();
    }).then(function (data) {
        let output = "";
        data.forEach(user => {
            output += `<li>${user.login}</li>`;
        });
        document.querySelector(".output").innerHTML = output;
    }).catch((err) => {
        console.log(err);
    });
}