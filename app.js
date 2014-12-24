var express = require('express'),
	sass 	= require('node-sass'),
  fs = require('fs'),
	app		= express();

var testJSON = fs.readFileSync('./test.json');
testJSON = JSON.parse(testJSON);

//built in middleware
app.use(express.static('./public'));
//app.use(express.static('./public/css'));

sass.renderFile({
  sourceMap: 'css.map',
  file: './sass/main.scss',
  outFile: 'public/css/main.css',
  success: function (css, map) {
    console.log("SUCCESS");
    //outFile: 'public/css/main.css'
  },
  error: function (error) {
    console.error(error);
  }
});

app.get('/', function(req, res){
    res.render('index.jade', {readings: testJSON});

});

app.listen(3000);