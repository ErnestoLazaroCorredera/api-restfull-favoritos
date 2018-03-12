'use strict'

var mongoose = require('mongoose');
var app = require('./app');
var port = process.env.PORT || 3678;

mongoose.connect('mongodb://localhost:27017/cursoFavoritos', (err, res) => {
	if (err) {
		throw err;
	} else {
		console.log('Conexión a mon correcta');
		app.listen(port, function(){
			console.log('API REST FAVORITOS funcionando en http://localhost:' + port);
		});
	}
	
});
