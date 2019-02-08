var express = require('express');
var app = express();
var bodyParser = require('body-parser');


var myPort = 8080;

app.use(bodyParser.urlencoded ({
	extended: true
}));

app.use(express.static('public'));
//hold a static html file in public folder.
app.use(bodyParser.json());
app.use((req, res, next) => {
	res.header('Access-Control-Allow-Origin', '*');
	res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
	res.header('Access-Control-Allow-Headers', 'Content-Type');
	next();
});

myURLCache = {
    counter: 0,
    urlToIndex: new Map(),
    indexToURL: new Map(),
    getIndex: function(url) {
        let index = this.urlToIndex.get(url);
        if (index === undefined) {
            this.urlToIndex.set(url, this.counter);
            this.indexToURL.set(this.counter, url);
            return this.counter++;
        }
        else {
            return index;
        }
    },
    getURL: function(index) {
        let url = this.indexToURL.get(index);
        if (url === undefined) {
            return '/';
        }
        else {
            if (url.indexOf('http') !== 0) {
                return 'https://' + url;
            }
            else return url;
        }
    }
}

app.post('/shortURL', (req, res) => {
    let url = req.body.url;
    res.send('localhost:' + myPort + '/' + myURLCache.getIndex(url));
})

app.get('/', (req, res) => {
    res.redirect('/app.html');
})
app.get('/*',(req, res) => {
    let url = req.path.substring(1);
    if (isNaN(url)) {
        res.redirect('/');
    }
    else {
        let index = parseInt(url);
        res.redirect(myURLCache.getURL(index));
    }
})
app.listen(myPort);
console.log("Short URL App Server is running on port 8080");