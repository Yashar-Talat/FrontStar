let btnJokes = document.querySelector(".get-joke");

btnJokes.addEventListener("click", getJokes);

function getJokes(e) {
    e.preventDefault();
    let number = document.querySelector("#number").value;
    let xhr = new XMLHttpRequest();
    xhr.open("GET", `http://api.icndb.com/jokes/random/${number}`, true);
    xhr.onload = function() {
        if(this.status === 200) {
            let jokes = JSON.parse(this.responseText);
            let output = "";
            if(jokes.type === "success") {
                jokes.value.forEach(joke => {
                    output += `<li>${joke.joke}</li>`
                });
            }else {
                output += "One thing maybe wrong!!!!";
            }
            document.querySelector(".jokes").innerHTML = output;
        }
    }
    xhr.send();
}