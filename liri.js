//Requires

var dotenv = require("dotenv").config();



var fs = require('file-system');

// Add the code required to import the keys.js file and store it in a variable.
var keys = require('./keys.js');

var inquirer = require('inquirer');
var moment = require('moment');
var request = require('request');
var Spotify = require('node-spotify-api');
// var bandsintown = require('bandsintown')(APP_ID);
// var omdb = require('omdb');

// You should then be able to access your keys information like so
var spotify = new Spotify(keys.spotify);
var omdbKey = keys.omdb.key;

var searchMovie = function(movieQuery) {
  // If no movie title was given, default to Mr. Nobody
  if(movieQuery === undefined) {
		movieQuery = "Mr. Nobody";
	}

  request("http://www.omdbapi.com/?t="+ movieQuery +"&apikey=" + omdbKey, function(err, response, body) {
    if (!err && response.statusCode === 200) {
      var movieDetails = JSON.parse(body);
      // console.log(movieDetails);
      console.log("\nTitle: " + movieDetails.Title 
          + "\nYear: " + movieDetails.Year
          + "\nCountry: " + movieDetails.Country
          + "\nLanguage: " + movieDetails.Language
          + "\nActors: " + movieDetails.Actors
          + "\nPlot: " + movieDetails.Plot
          + "\nIMDB Rating: " + movieDetails.imdbRating
          );

  
  
      var ratings = movieDetails.Ratings;
      for (var i = 0; i < ratings.length; i++) {
        // Only show the Rotten Tomatoes rating
        if (ratings[i].Source === "Rotten Tomatoes") {
          console.log("Rotten Tomatoes rating: "  + ratings[i].Value);
        }
      }
    } else {
      console.log("An error occured");
      console.log(err);
    }
  });  
}; 

var searchConcert = function(concertQuery) {
  console.log("Concert query: " + concertQuery);
  console.log("Concert searching not yet implemented");
} 

// Make it so liri.js can take in one of the following commands: concert-this, spotify-this-song, movie-this, do-what-it-says
// node liri.js [ command ] [ query - optional ]
var command = process.argv[2];
var query = process.argv[3];

if (command === "movie-this") {
  searchMovie(query);
} else if (command === "concert-this") {
  searchConcert(query);
} else {
  console.log("Unknown command: " + command);
}