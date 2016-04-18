# Fitter - React Client for a Twitter Filter API
Created by [David Sudia](https://github.com/dsudia), [Rachel Koldenhoven](https://github.com/rachelkoldenhoven) and [Ben Hernandez](https://github.com/benaychh)
## Uses and Users
Fitter is a client that accesses an eponymous API that filters Tweets. The API can be found [here](http://github.com/dsudia/java-twitter-api). Users login to Fitter and can select a number of filters to apply to incoming Tweets, and then view those tweets. Anyone who wants to customize a Twitter feed to analyzde different data can use Fitter.

## Technologies Involved
Fitter uses React.js for updating users' view on the front-end, and Node/Express.js as a server to make API calls. Users login using Twitter OAuth, and their information is stored in a Mongo database.

## Features
Users can choose to filter tweets by geolocation, semantic analysis, and/or keyword searches (of bodies and hash tags). They can save these filters, so when they login they can create a new filter or choose one they have made previously. Tweets are presented in a standard feed format, as well as in a bar graph if semantic analysis is chosen, a candle graph, and a map of origin locations.

## Project Tracking
[Pivotal Tracker](https://www.pivotaltracker.com/n/projects/1572541)
