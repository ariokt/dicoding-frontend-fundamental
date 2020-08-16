class MovieList extends HTMLElement {
    constructor() {
        super();
        this._shadowRoot = this.attachShadow({mode: "open"});
    }

    set movies(movies) {
        this._movies = movies;
        this.render();
    }

    render() {

        this._movies.forEach(movie => {
            const movieItemElement = document.createElement("movie-item");
            movieItemElement.innerHTML = `
            
            <style>
                :host {
                    display: flex;
                    color: #FFFAFA;
                    flex-wrap: wrap;
                }

                movie-item {
                    width: 20%;
                    margin: 0 auto 10px auto;
                    padding: 5px;
                    background-color: black;
                    border-radius: 5px;
                }

                movie-item:hover {
                    background-color: white;
                    color: #8c0000;
                }
                
                @media only screen and (max-width: 600px) {
                    movie-item {
                        width:45%;
                    }

                    h3 {
                        font-size: 15px;
                    }

                    p {
                        font-size: 15px;
                    }

                    img {
                        height: 200px;
                    }
                }
            </style>

            <img src="https://image.tmdb.org/t/p/w500${movie.poster_path}" width="100%" height="300px" alt="TMDB poster"></img>
            <h3>${movie.original_title}</h3>
            <p>Rating: ${movie.vote_average}</p>
            <p>Popularity: ${movie.popularity}</p>
            `
            this._shadowRoot.appendChild(movieItemElement);  
        });
    }
}

customElements.define("movie-list", MovieList);