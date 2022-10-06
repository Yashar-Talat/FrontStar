class EasyAsyncAwait {
    async get(url) {
        let response = await fetch(url);
        let users = await response.json();
        return users;
    }

    async post(url, data) {
        let response = await fetch(url, {
            method: "POST",
            header: {
                "Content-type": "application/json"
            },
            body: JSON.stringify(data)
        });
        let user = await response.json();
        return user;
    }

    async put(url, data) {
        let response = await fetch(url, {
            method: "PUT",
            header: {
                "Content-type": "application/json"
            },
            body: JSON.stringify(data)
        });
        let user = await response.json();
        return user;
    }

    async delete(url) {
        let response = await fetch(url, {
            method: "DELETE",
            header: {
                "Content-type": "application/json"
            }
        });
        let resData = await "User Deleted......";
        return resData;
    }
}