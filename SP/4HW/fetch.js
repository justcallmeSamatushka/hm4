const requestURL = "https://jsonplaceholder.typicode.com/posts";


function sendRequest(method, url, body = null) {
    return fetch(url).then(res => {
        return res.json();
    })
}


sendRequest('GET', requestURL)
    .then(data => console.log(data))
    .catch(err => console.log(err));