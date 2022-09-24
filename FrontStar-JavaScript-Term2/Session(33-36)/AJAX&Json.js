let customerBtn = document.querySelector("#customerBtn");
let customersBtn = document.querySelector("#customersBtn");
customerBtn.addEventListener("click", loadCoustomer);
customersBtn.addEventListener("click", loadCoustomers);

function loadCoustomer() {
    let xhr = new XMLHttpRequest();
    xhr.open("GET", "customer.json", true);
    xhr.onload = function () {
        if (this.status === 200) {
            // console.log(this.responseText);
            let customer = JSON.parse(this.responseText);
            let output = `
            <ul>
            <li>ID : ${customer.id}</li>
            <li>Name :${customer.name}</li>
            <li>Family :${customer.family}</li>
            <li>Age :${customer.age}</li>
            </ul>`;
            document.querySelector("#customer").innerHTML = output;
        }
    }
    xhr.send();
}

function loadCoustomers() {
    let xhr = new XMLHttpRequest();
    xhr.open("GET", "customers.json");
    xhr.onload = function () {
        if (this.status === 200) {
            let customers = JSON.parse(this.responseText);
            let output = "";
            customers.forEach(element => {
                output += `<ul>
                <li>ID : ${element.id}</li>
                <li>Name :${element.name}</li>
                <li>Family :${element.family}</li>
                <li>Age :${element.age}</li> 
                </ul>`
            document.querySelector("#customers").innerHTML = output;
            });
        }
    }
    xhr.send();
}