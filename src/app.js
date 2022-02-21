

const yargs = require("yargs"); // Imports go here

// Avoid global variables- 

const app = (yargsObj) => { 
    if (yargsObj.add) {
        console.log("You typed");
        const movie = new Movie(yargsObj.title, yargsObj.actor);
        movie.add();
        console.log(movie.list());
        // Add movie to array
    }
    else {
        console.log("Incorrect command")
    }
}
 


console.log(yargs.argv.title);