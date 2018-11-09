//requiring our .env file and keys
require("dotenv").config();

//requiring everything we need
var request = require("request");
var Spotify = require('node-spotify-api');

//accessing spotify keys
var keys = require("./key");

var spotify = new Spotify(keys.spotify);
// console.log(spotify.credentials.id + "\n" + spotify.credentials.secret);
// console.log(spotify);

//SET UP OUR PROCESS.ARGV STUFF HERE, [2] for command and [3+] for search
//will need to create a loop through the process.argv array to put together the search
var command = process.argv[2];
var search = process.argv[3];

//CONCERT CODE
//command: 'concert-this' [user searches artist or band name here, set to artist var]
//pull data from "https://rest.bandsintown.com/artists/" + artist + "/events?app_id=codingbootcamp"

if (command === "concert-this") {
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
//use spotify API

if (command === "spotify-this-song") {
    spotify
    .search({type: "track", query: search, limit: 1})
    .then(function(response) {
        // console.log(response);
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
//pulls from IMBD

if (command === "movie-this") {
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

//DO WHAT IT SAYS
//command 'do-what-it-says'
//pull from random.txt to use the command written there

if (command === "do-what-it-says") {

};