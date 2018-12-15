// constructor which can be used to create objects with the ".raining", ".noise",
// and ".makenoise" properties 

// concert-this
// spotify-this-song
// movie-this
// do-what-it-says

//Grab data from keys.js


function Animal(raining, noise) {
    this.concert = concert;
    this.thisSong = thisSong;
    this.doWhatItSays = doWhatItSays;
    this.movie = movie
    function() {
      if (this.raining === true) {
        console.log(this.noise);
      }
    };
  }
  
  // sets the variables "dogs" and "cats" to be animal objects and initializes them with raining and noise properties
  var dogs = new Animal(true, "Woof!");
  var cats = new Animal(false, "Meow!");
  
  // calling dogs and cats makeNoise methods
  dogs.makeNoise();
  cats.makeNoise();
  
  // if we want, we can change an objects properties after they're created
  cats.raining = true;
  cats.makeNoise();
  
  var massHysteria = function(dogs, cats) {
    if (dogs.raining === true && cats.raining === true) {
      console.log("DOGS AND CATS LIVING TOGETHER! MASS HYSTERIA!");
    }
  };
  
  massHysteria(dogs, cats);

  ///////////////////////////////////////////////////////////////////////////////

  var spotifyThisSong = function(trackQuery) {
	// Load Spotify npm package
	var spotify = require('spotify');

	// if no trackQuery is passed in, then we will be querying for this particular song
	if(trackQuery === undefined) {
		trackQuery = "the sign ace of base";
	}

	// Spotify API request (if an object is returned, output the first search result's artist(s), song, preview link, and album)
	spotify.search({ type: 'track', query: trackQuery }, function(error, data) {
	    if(error) { // if error
	        console.log('Error occurred: ' + error);
	    } else { // if no error
	    	// For loop is for when a track has multiple artists
				for(var i = 0; i < data.tracks.items[0].artists.length; i++) {
					if(i === 0) {
						console.log("Artist(s):    " + data.tracks.items[0].artists[i].name);
					} else {
						console.log("              " + data.tracks.items[0].artists[i].name);
					}
				}
				console.log("Song:         " + data.tracks.items[0].name);
				console.log("Preview Link: " + data.tracks.items[0].preview_url);
				console.log("Album:        " + data.tracks.items[0].album.name);
	    }
	 
	 		
	});
}





var spotify = new Spotify(keys.spotify);
var request = require('request');
var spotify = require('spotify');
var fs = require('fs');


fs.readFile('best_things_ever.txt', 'utf8', function(error, data) {
  console.log(data);

  var dataArray = data(trim).split(',');
  console.log(dataArray);

  for (var i = 0; i < dataArray.length; i++) {
      console.log(dataArray[i]);
  }
})

//Stored argument's array
var nodeArgv = process.argv;
var command = process.argv[2];
//movie or song
var x = "";
//attaches multiple word arguments
for (var i=3; i<nodeArgv.length; i++){
  if(i>3 && i<nodeArgv.length){
    x = x + "+" + nodeArgv[i];
  } else{
    x = x + nodeArgv[i];
  }
}

//switch case
switch(command){
  case "spotify-this-song":
    if(x){
      spotifySong(x);
    } else{
      spotifySong("Fluorescent Adolescent");
    }
  break;

  case "movie-this":
    if(x){
      omdbData(x)
    } else{
      omdbData("Mr. Nobody")
    }
  break;

  case "do-what-it-says":
    doThing();
  break;

  default:
    console.log("{Please enter a command: spotify-this-song, movie-this, do-what-it-says}");
  break;
}
  