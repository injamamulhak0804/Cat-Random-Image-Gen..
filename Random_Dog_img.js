const container = document.getElementsByClassName("container")[0];
const Btn = document.getElementById("btn")


const API = "https://api.thecatapi.com/v1/images/search ";

const xhr = new XMLHttpRequest();
const GetNewDog = () => {
    function fetchPost() {
        xhr.onload = () => {
            if (xhr.status == 200) {
                let postArray = JSON.parse(xhr.response);
                let imgscr = postArray[0].url;
                container.innerHTML = `<img src= ${imgscr} height=300 width=300/>`
            } else {
                console.log("There is an Error in the Network")
            }
        }
        xhr.open("GET", API);
        xhr.send();
    }

    fetchPost()
}

Btn.onclick = () => GetNewDog();

GetNewDog()