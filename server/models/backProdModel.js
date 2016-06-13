var mongoose = require('mongoose');

var ProductSchema = new mongoose.Schema({
	name: String,
	imageUrl: String,
	description: String,
	quantity: Number
	// in the partial input tags you need to have a name='' for 
	// each of the keys above for instance you would need to 
	// create the html below:
	// <input name='name'>
	// <input name='imageUrl'>
	// <input name='description'>
	// <select name='quantity'>
});
mongoose.model('Product', ProductSchema);