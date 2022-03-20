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
    }

        else if (yargsObj.addMulti) {

            const movie1 = new Movie(yargsObj.title, yargsObj.actor, yargsObj.director);
            const movie2 = new Movie(yargsObj.title, yargsObj.actor, yargsObj.director);
            movie1.add();
            movie2.add();
        }
        // Add movie to array
    
    else {
        console.log("Incorrect command")
    }
}
 



app(yargs.argv)