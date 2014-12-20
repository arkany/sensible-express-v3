var express = require('express'),
	//sass 	= require('node-sass'),
	app		= express();


//SASS/SCSS rendering into CSS
// sass.render({
// 	file: 'sass/main.scss',
// 	success: function(css) {
//         console.log(css);
//         console.log(stats);
//     },
//     error: function(error) {
//         console.log(error);
//     },
// 	imagePath: '/img',
// 	outputStyle: 'expanded'
// 	stats: stats
// });


// app.route('/')
// 	.get(function(req, res){
// 		res.render('index.jade');
// 	});
app.get('/', function(req, res){
	res.render('index.jade');
});

app.listen(3000);