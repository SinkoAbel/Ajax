
const API = 'https://reqres.in/api/users';

// communicationg with API through JSON

// 3 comm. methods:
// 1) xhr
// 2) jQuery call
// 3) fetch API => probably the best one


// 1) xhr method
function Ajax1() {
    const xhr = new XMLHttpRequest();
    const method = 'GET';

    xhr.open(method, API, true)
    xhr.onreadystatechange = function () {

        if (this.readyState == 4 && this.status == 200) {
            console.log(this.responseText);
            console.log(JSON.parse(this.responseText));

            const content = JSON.parse(this.responseText);
            for (let i = 0; i < content.data.length; i++) {
                console.log(content.data[i].email);
            }
        }
    }
    xhr.send();
};



// 3) fetch API 
function Ajax2() {
    fetch(API, { method: 'GET' })
        .then(result => {
            return result.json()
        })
        .then(content => {
            console.log(content);

            console.log(content.data.length);

            for (let i = 0; i < content.data.length; i++) {
                console.log(content.data[i].email);
            }

        })
        .catch(error => {
            console.log(error);
        })
};


// Send data
function Ajax3() {
    fetch(API, {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-type': 'application/json'
        },
        body: {
            "name": "Sinkó",
            "job": "Junior developer"
        }
    })
        .then(result => {
            return result.json();
        })
        .then(data => {
            console.log(data.id);
        })
        .catch(error => {
            console.log(error);
        })
};

