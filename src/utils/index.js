const movieArr = [];

class Movie {
    constructor (title, actor = "You don't know who's in this", director ){
        this.title = title;
        this.actor = actor;
        this.director = director;
    }
    add () {
        movieArr.push(this);

    }
    list () {
        return movieArr;
    }
       
}

module.exports = Movie;