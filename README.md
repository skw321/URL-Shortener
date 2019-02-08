# URL-Shortener

## Step

This program was coded in node.js environment.

1.Download files, and Unzip the archive to local directory.

2.Node.js environment is necessary. Please install the node.js. (https://nodejs.org/en/download/)

3.Use command line tool with command "node app.js" to run this program.

4.Link localhost:8080 by any broswers.

5.Put any URL into input box. The shorter URL will be generated as below.

<img width="268" alt="screen shot 2019-02-07 at 9 00 25 am" src="https://user-images.githubusercontent.com/14944344/52431353-e4104300-2abc-11e9-90cb-1190fb015df6.png">

6.Put shorted URL into broswer. This shorted URL will lead to the orignal page.


Try another way.

Use "npm start" in command line tool in the URL shortener folder.

## Approach

### Introdction

This application mainly use Express.js framework to build the web API service.

There are two map in this application: url to index and index to url.

### How it work

1. When users send the short url request by click button, the input URL will submit "post" request to server by AJAX with XMLHttpRequest object.

2. As long as the server receive the http post request, the post method will activate and then do the URL check.
   
   2.1 If the URL exist in url to index map, the shortened URL response will be sent to the browser with delicated index
   
   2.2 If the URL does not exist, it will put into both map.
  
3. When users link to one of the shortened url, the http get mothod will activate, and return the original url by index to url map. The Express JS will do the redirect action once orignal url has been retrived.



