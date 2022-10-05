let http = new EasyHttpFetch();
// http.get("https://jsonplaceholder.typicode.com/users")
//     .then(users => {
//         console.log(users)
//     }).catch(err => {
//     console.log(err)
// });
let user = {name: "Yashar", userName: "YasharTalat", Age: "19"};

// http.post("https://jsonplaceholder.typicode.com/users",user).then(user => {
//     console.log(user)
// }).catch(err => {
//     console.log(err);
// });

// http.put("https://jsonplaceholder.typicode.com/users/5",user).then(user => {
//     console.log(user)
// }).catch(err => {
//     console.log(err);
// });

http.delete("https://jsonplaceholder.typicode.com/users/5")
    .then(response => {
        console.log(response)
    }).catch(err => {
    console.log(err);
});