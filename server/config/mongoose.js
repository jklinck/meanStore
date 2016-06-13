var mongoose = require ('mongoose');
var fs = require ('fs');

mongoose.connect('mongodb://localhost/mean_store');

var models_path = __dirname+'/../models';

fs.readdirSync(models_path).forEach(function(file){
	if(file.indexOf('.js')>0){
	  require(models_path+'/'+file);
	  // this goes through the models folder and requires any
	  // file that ends in .js, thus we can require all of our
	  // models at once
	};
});

// this file allows us to load all of our models at once