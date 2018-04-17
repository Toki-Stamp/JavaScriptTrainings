let moviesList = document.getElementById('movies');

function addMovieToList(movie) {
    let img = document.createElement('img');
    img.src = movie.Poster;
    moviesList.appendChild(img);
}

function getData(url, whenDoneDoThis) {
    let xhr = new XMLHttpRequest();
    xhr.open('GET', url);
    xhr.onload = function () {
        if (xhr.status === 200) {
            let json = JSON.parse(xhr.response);
            console.log(json);
            whenDoneDoThis(json.search);
        } else {
            console.error(xhr.statusText);
        }
        
        xhr.onerror = function (error) {
            console.error(error)
        };
        
        xhr.send();
    }
}

let search = 'spider man';

getData(`http://www.omdbapi.com/?t=${search}`, function (movies) {
    movies.forEach(function (movie) {
        addMovieToList(movie)
    })
});

function go(num) {
    return new Promise(function (resolve, reject) {
        let delay = Math.ceil(Math.random() * 3000);
        console.log(num, delay);
        setTimeout(() => {
            if ((delay) > 2000) {
                reject(num);
            } else {
                resolve(num);
            }
        }, delay);
    });
}

let p1 = go(1);
let p2 = go(2);
let p3 = go(3);
let p4 = go(4);
let p5 = go(5);

Promise.all([p3, p1, p2])
       .then(value => console.log(value))
       .catch(error => console.error(error));