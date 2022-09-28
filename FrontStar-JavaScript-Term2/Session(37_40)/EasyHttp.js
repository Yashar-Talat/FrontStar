class EasyHTTP {
    constructor(){
        this.http = new XMLHttpRequest();
    }



    //Make http request by GET


    getPosts(url, callback){

    this.http.open("GET", url, true);
    this.http.onload = ()=>{
        if(this.http.status === 200){
            callback(null, this.http.responseText);
        }else{
            callback(`Error : ${this.http.status}`);
        }
    }
    this.http.send();
    }
}