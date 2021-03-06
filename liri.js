//requiring our .env file and keys
require("dotenv").config();

//requiring everything we need
var request = require("request");
var fs = require("fs");
var Spotify = require('node-spotify-api');

//accessing spotify keys
var keys = require("./key");

var spotify = new Spotify(keys.spotify);

//setting up our command variable
var command = process.argv[2];

//constructing our search variable
var searchTerm = process.argv.splice(3);
var search = searchTerm.join("+");

//CONCERT CODE
//command: 'concert-this' [user searches artist or band name here, set to artist var]

function concertThis(search) {
    //request URL for Bands In Town
    var requestURL = "https://rest.bandsintown.com/artists/" + search + "/events?app_id=codingbootcamp";

    request(requestURL, function(error, response, body) {
        if (!error && response.statusCode === 200) {
            console.log("Top 5 Venues Available:");
    
            var data = JSON.parse(body);
    
            for (i=0; i<5; i++) {
                console.log("\n-----\n");
                console.log("Event Location: " + data[i].venue.name);
                console.log("Country: " + data[i].venue.country);
                console.log("City: " + data[i].venue.city + ", " + data[i].venue.region);
    
                var date = new Date(data[i].datetime);
    
                console.log("Time: " + date);
                console.log("\n-----\n");
            };
        };
    });
};


//SPOTIFY CODE
//command: 'spotify-this-song' [user searches song name here, var set to song]

function spotifyThis(search) {
    spotify
    .search({type: "track", query: search, limit: 1})
    .then(function(response) {
        var data = response.tracks.items[0];

        console.log("\n-----\n");
        console.log("Song: " + data.name);
        console.log("Artist: " + data.artists[0].name);
        console.log("Album: " + data.album.name);
        console.log("Preview URL: " + data.preview_url);
        console.log("\n-----\n");
    })
    .catch(function(error) {
        console.log(error);
    });
};

//MOVIE CODE
//command: 'movie-this' [user searches movie title here]

function movieThis(search) {
    //request URL for the OMDB API
    var requestURL = "http://www.omdbapi.com/?apikey=trilogy&t=" + search;

    if (search === undefined) {
        var search = "Mr.Nobody";
        var requestURL = "http://www.omdbapi.com/?apikey=trilogy&t=" + search;

        console.log("You should watch Mr. Nobody! It's on Netflix!");

        request(requestURL, function(error, response, body) {
            if (!error && response.statusCode === 200) {

                var data = JSON.parse(body);

                console.log("\n-----\n");
                console.log("Title: " + data.Title);
                console.log("Release Year: " + data.Year);
                console.log("IMDB Rating: " + data.imdbRating);
                console.log("Rotten Tomatoes Rating: " + data.Ratings[1].Value);
                console.log("Country Produced: " + data.country);
                console.log("Language: " + data.Language);
                console.log("Plot: " + data.Plot);
                console.log("Actors: " + data.Actors);
                console.log("\n-----\n");
            };
        });

    } else {

        request(requestURL, function(error, response, body) {
            if (!error && response.statusCode === 200) {

                var data = JSON.parse(body);

                console.log("\n-----\n");
                console.log("Title: " + data.Title);
                console.log("Release Year: " + data.Year);
                console.log("IMDB Rating: " + data.imdbRating);
                console.log("Rotten Tomatoes Rating: " + data.Ratings[1].Value);
                console.log("Country Produced: " + data.country);
                console.log("Language: " + data.Language);
                console.log("Plot: " + data.Plot);
                console.log("Actors: " + data.Actors);
                console.log("\n-----\n");
            };
        });
    };
};


//running the checks for commands

if (command === "concert-this") {
    concertThis(search);
};

if (command === "spotify-this-song") {
    spotifyThis(search);
};

//MOVIE CODE
//command: 'movie-this' [user searches movie title here]

if (command === "movie-this") {
    movieThis(search);
};

//DO WHAT IT SAYS
//command 'do-what-it-says'
//pull from random.txt to use the command written there

if (command === "do-what-it-says") {

    fs.readFile("random.txt", "utf-8", function(error, data) {
        if (error) {
            console.log("Something went wrong...");
            console.log(error);
        } else {
            var randomTxtArr = data.split(",");
            var doCommand = randomTxtArr[0];
            var doSearchTerm = randomTxtArr.splice(1);
            var doSearch = doSearchTerm.join("+");

            console.log("Running command from random.txt...");
            console.log(doCommand + " " + doSearch);

            if (doCommand === "concert-this") {
                concertThis(doSearch);
            } else if (doCommand === "spotify-this-song") {
                spotifyThis(doSearch);
            } else if (doCommand === "movie-this") {
                movieThis(doSearch);
            } else {
                console.log("There is nothing we can do with random.txt.");
            }
        };
    });

};