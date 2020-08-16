import DataSource from '../data/data-source.js';
import "../custom/movie-list.js"

let main = function () {
    let movieListElement = document.querySelector("movie-list");

    let renderResult = results => {
        movieListElement.movies = results;
    };

    let fallbackResult = result => {
        movieListElement.innerHTML = `${result}`;
    }

    
    DataSource.theMovie()
        .then(renderResult)
        .catch(fallbackResult)
    
    

}

export default main;