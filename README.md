### liri-node-app
LIRI - A Node App For Your Music And Movie Look Up Needs!


# What is LIRI?
LIRI is a _Language Interpretation and Recognition Interface_ that absolutely in no way was inspired by SIRI. (...Okay, maybe just a *little*.)

For those of you who just can't ever bear to close Terminal, then LIRI has you covered. With this app, you can look up everything you need from BandsInTown, Spotify, and IMDB; all from the comfort for your command line! 

Just don't forget to run _npm install_ before you get started!


## concert-this
![Concert This 01](/images/concert-this-01.png)
![Concert This 02](/images/concert-this-02.png)

Want to see your favorite band in person? You can use the command _concert-this **(band/artist name)**_ to look up the top five upcoming venues of that band! If your favorite band has a concert coming up, the BandsInTown API will ensure know with this command.


## spotify-this-song
![Spotify-This-Song](/images/spotify-this-song.png)

QUICK! Can you remember who sang Hello? Maybe you forgot which album your favorite song was on? Or maybe you just needed to hear the first 30 seconds real quick so you can be prepared for your karaoke party tonight? Well the _spotify-this-song **(song name)**_ has you covered! So long as you can remember the song name, spotify-this-song has you covered!

**As an important note:** _you_ will need to become a [Spotify Developer](https://developer.spotify.com/dashboard/) and request your own ID and secret in order to use this feature. Create your own _.env_ file and include this code to code once you have what you need: 
```js
# Spotify API keys

SPOTIFY_ID=your-spotify-id
SPOTIFY_SECRET=your-spotify-secret

```


## movie-this
![Movie-This](/images/movie-this.png)

Jurassic Park was that movie most famous for Jeff Goldblum, wasn't it? Thanks to _movie-this **(move name)**_ you're never at risk for forgetting! Amaze your friends with your knowledge of movie trivia that you absolutely were not secretly looking up just now with the _movie-this_ command!

Unfortunately, a bug where the dinosaur actors were never named seems to persist. You're on your own if you need to look up whether the T-Rex at the end of the movie was Sir Roars-A-Lot or his less famous stunt-double Mr. T-Rex.


## do-what-it-says
![Do-What-It-Says](/images/do-what-it-says.png)

With LIRI we've included a file called _random.txt_. Inside this file is a prewritten command. When you run _do-what-it-says_, it'll run whichever command is current in the text file. As you can see in the example image above, we ran _spotify-this-song "I Want it That Way"_.

Once you have LIRI installed, you have the chance to surprise your friends by supplying whatever commands you like! You could kindly remind them when their favorite band is in town, or cruelly show them the plot synopsis of The Emoji Movie. Just remember that LIRI accepts no legal responsibility for the destruction of decades-long friendships through the misuse of our random.txt file.