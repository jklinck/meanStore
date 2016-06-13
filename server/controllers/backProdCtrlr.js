var mongoose = require('mongoose');
var Product = mongoose.model('Product');

module.exports = (function(){
	return{
		show: function(req,res){
			Product.find({},function(err,results){
				if(err){
					console.log(err);	
				}else{
					res.json(results);
				}
			})
		},
		save: function(req,res){
			var product = new Product(req.body);
			product.save(function(err){
				if(err){
					console.log("Product didnt't load to database");
					res.redirect('/');
				} else{
					console.log('Successfully added new product');
				}
			})
		},
		subtractProdQuant: function(req,res){
			var newQuantity = req.body.quantity;
			var minusQuant = parseInt(newQuantity) * -1;
			var submittedProdName = req.body.product;
			Product.findOneAndUpdate({name:submittedProdName},{$inc:{"quantity":minusQuant}},{upsert:true},function(err){
				if(err){
					console.log("Quantity didn't update.");
				}else{
					console.log("Quantity has been updated.");
				}
			});
		}
	}
})();