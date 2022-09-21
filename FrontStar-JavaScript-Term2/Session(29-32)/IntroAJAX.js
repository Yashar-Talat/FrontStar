let button = document.querySelector('#get-data');
button.addEventListener("click", LoadData);

function LoadData() {
    let xhr = new XMLHttpRequest();
    xhr.open('GET', 'test.txt', true);

    xhr.onprogress = function () {
        console.log(this.readyState);
    }

    xhr.onload = function () {
        // console.log(this.responseText);
        document.querySelector(".output").innerHTML = `<h1>${this.responseText}</h1>`;
    }
    xhr.send();

}