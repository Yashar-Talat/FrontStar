class EasyHttp {
    constructor() {
        this.http = new XMLHttpRequest();
    }

    getPosts(url,callback) {
        this.http.open("GET",url,true);
        this.http.onload = () => {
            if(this.http.status === 200) {
                callback(null,this.http.responseText);
            }
            else {
                callback('Error :'`${this.http.status}`);
            }
        }
        this.http.send();
    }
}