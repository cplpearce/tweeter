<p align="center" ><b>Tweeter</b></p>
<p align="center"><img width="220" height="300" src="https://github.com/cplpearce/tweeter/blob/master/screenshots/tweeter-mobile-layout.png"></p>
<p align="center" ><b>Has Twitter Gotten Stale?</b></p>

##### What:
Tweeter is a personalized platform for hosting your own thoughts!  Post tweets up to 140 characters (but no more than that!), read the tweets of others, and share your [short-links](https://github.com/cplpearce/tinyapp) you've been keeping to yourself!

Included in the app is user input sanitization (no nasty javascipt injects), and error handling for tweet length, or absence of length.

##### Who:
This little app will suit anyone, however I should warn you at this stage this is purely a self-contained application.  When you do tweet, to your millions of followers, sadly only you will be able to read them.

##### How:
This project is created using a mix of Nodejs, Javascript, jquery, html/css, and various other mechanisms for displaying html.  The backend of this app was created by Lighthouse Labs.

To get this running on your local machine running Nodejs, npm install the following:
*    "body-parser": "^1.15.2",
*    "chance": "^1.0.2",
*    "express": "^4.13.4",
*    "md5": "^2.1.0"

Or download the app and run `npm i` to get all the packages required - then `npm start` and navigate your browser to `localhost:8080`!

##### Screen Shots:
### Desktop Layout
![desktop layout](https://github.com/cplpearce/tweeter/blob/master/screenshots/tweeter-desktop-layout.png)
### Write a Tweet
![new tweet](https://github.com/cplpearce/tweeter/blob/master/screenshots/tweeter-writing-a-tweet.png)
### Post a Tweet
![post](https://github.com/cplpearce/tweeter/blob/master/screenshots/tweeter-tweet-posted.png)
### Tweet Too Long
![tweet error](https://github.com/cplpearce/tweeter/blob/master/screenshots/tweeter-tweet-too-long.png)
