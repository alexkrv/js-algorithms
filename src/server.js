var express = require('express');
var bodyParser = require('body-parser');

var app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});


app.get('/', function (req, res) {
  res.send('Hello API');
});

app.listen(3012, function () {
  console.log('API app started')
});

app.get('/api/get_number', function (req, res) {
    res.header('Access-Control-Allow-Origin', '*')
    let number = Math.random()*100
    res.send( String( Math.floor( number ) ) )
});

app.get('/api/get-product/:id', function (req, res) {
  var product = [];
  console.log(product);
    if(product === undefined){
        res.sendStatus(404)
    }else{
        res.send(product);
    }
});


app.post('/api/edit-product/:id', function (req, res) {
  var targetInd = []

  console.log("targetInd",targetInd,"wholeProductsList",wholeProductsList[0]);
  res.send('post data');
})