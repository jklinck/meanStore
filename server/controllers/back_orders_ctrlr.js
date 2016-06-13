var mongoose = require('mongoose');
var Order = mongoose.model('Order');

module.exports = (function(){
	return {
		show2: function(req, res) {
	      Order.find({},function(err,results){
	      	// console.log('back order ctrlr:',results);
	      	if(err){
	      		console.log(err);
	      	}else{
	      		res.json(results);
	      	}
	      });
	    },
	    save2: function(req,res){
	      var order = new Order(req.body);
	      order.save(function(err){
		      if(err){
		        console.log('Something went wrong.');
		        res.redirect('/');
		      } else{
		        console.log('Successfully added new order.');
		        res.json(order);
		      };
	      });
	    }
	}
})();
