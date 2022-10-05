class EasyHttpFetch {
    get(url) {
        return new Promise((resolve, reject) => {
            fetch(url)
                .then((res) => {
                    return res.json();
                }).then((data) => {
                console.log(data);
            }).catch((err) => {
                console.log(err);
            })
        })
    }
    post(url,data) {
        return new Promise((resolve,reject)=>{
            fetch(url,{
                method:"POST",
                header: {
                    "Content-type":"application/json"
                },
                body:JSON.stringify(data)
            })
                .then(res=> res.json())
                .then(data=> resolve(data))
                .catch(err=> reject(err))
        });
    }

    put(url,data) {
        return new Promise((resolve,reject)=>{
            fetch(url,{
                method:"PUT",
                header: {
                    "Content-type":"application/json"
                },
                body:JSON.stringify(data)
            })
                .then(res=> res.json())
                .then(data=> resolve(data))
                .catch(err=> reject(err))
        });
    }
    delete(url) {
        return new Promise((resolve,reject)=>{
            fetch(url)
                .then(res=> {return res.json()})
                .then(data=> resolve("user deleted....."))
                .catch(err=> reject(err))
        });
    }

}