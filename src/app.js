// Imports go here
const yargs = require("yargs"); 
const Movie = require("./utils");
// Avoid global variables - 

const app = (yargsObj) => {  //function to add new movie objects
    if (yargsObj.add) {
        console.log("You typed.......");
        const movie = new Movie(yargsObj.title, yargsObj.actor, yargsObj.director);
        movie.add();
        console.log(movie.list());
        // Add movie to array
    }
    else {
        console.log("Incorrect command")
    }
}
 



app(yargs.argv)