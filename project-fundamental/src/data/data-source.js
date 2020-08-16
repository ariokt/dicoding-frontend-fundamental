

class DataSource {
    static theMovie() {
        return fetch(`https://api.themoviedb.org/3/discover/movie?api_key=073467961d4d75108bcf53f1b452e105&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1`, {
            method: "GET"
        })
        .then(response => response.json())
        .then(responseJson => {
            if(responseJson.results) {
                return Promise.resolve(responseJson.results);
            } else {
                return Promise.reject(`not found`);
            }
        })

    }
}

export default DataSource;