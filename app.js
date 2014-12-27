var express = require('express'),
	sass 	= require('node-sass'),
  //bourbon = require('node-bourbon'),
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
  success: function (css, map) {
    console.log("SUCCESS");
    //outFile: 'public/css/main.css'
  },
  error: function (error) {
    console.error(error);
  },
  //includePaths: bourbon.with('sass'),
  //includePaths: bourbon.includePaths,
  outputStyle: 'compressed',
  outFile: 'public/css/main.css'
});

app.get('/', function(req, res){
    res.render('index.jade', {readings: testJSON});

});

app.listen(3000);