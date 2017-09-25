# Artist-360-Bootcamp-Project-1

I followed the example listed here to get the autherization going:
https://developers.google.com/youtube/v3/quickstart/js

i used the client id from this:
https://console.developers.google.com/apis/credentials?project=artist-360-app
im figuring out whats the difference between a client id and api

had to install a web server because i think the youtube api is required to use one?

this article explains it a bit:
https://www.quora.com/Why-do-I-need-a-webserver

i also had to install python i ran into an error and wasnt able to run pythong in my git bash terminal found this article to fix it
https://stackoverflow.com/questions/22869192/git-bash-wont-run-my-python-files

//============================================================================================================

added an authSample.html which uses both an api key and client id
i think i understand a bit whats the difference between client id and api

-client id allows the application-artist360 to use the youtube api at a specific web url on the internet?

--for example if we want to deploy it to the a git hub pages. we have to associate the client-id in the developer console with the link to the git hub pages.

--the api-key allows developers to use the different features that the organization:youtube provides like youtube data api, google people api 

the example with authSample.html is here:
https://developers.google.com/api-client-library/javascript/samples/samples

the github link to the authSample.html file is here i created a copy in the youtube branch:
https://github.com/google/google-api-javascript-client/edit/master/samples/authSample.html

i got the api key from: i inserted the api key and client id in the respective locations in the authSample.html
https://console.developers.google.com/apis/credentials?project=artist-360-app

//============================================================================================================

This one is what we need! similar to above examples a webserver is needed

taken from: https://developers.google.com/youtube/v3/quickstart/js

Step 3: Run the sample

Start the web server using the following command from your working directory:

PYTHON 2.XPYTHON 3.X

python -m SimpleHTTPServer 8000

Load the URL http://localhost:8000/youtubeSearch.html into your browser.

found an example of youtubeSearch.html on github:

https://github.com/FriesFlorian/ViralVideos

i took the files needed to replicate the example

added comments in app.js and console.log a bunch of stuff to see how it worked

added two files youtubeSearch.html, item.html

youtubeSearch uses app.js

app.js uses item.html

