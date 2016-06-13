var mongoose = require('mongoose');
var Customer = mongoose.model('Customer');

module.exports = (function(){
	return {
		show: function(req, res) {
	      Customer.find({},function(err,results){
	      	if(err){
	      		console.log(err);
	      	}else{
	      		res.json(results);
	      	}
	      });
	    },
	    save: function(req,res){
	      var customer = new Customer(req.body);
	      customer.save(function(err){
		      if(err){
		        console.log('Something went wrong.');
		        res.redirect('/');
		      } else{
		        console.log('Successfully added new customer.');
		        res.json(customer);
		      };
	      });
	    },  
	    destroy: function(req,res){
	      Customer.remove({_id:req.params.id},function(err, friends) {
	          console.log('Successfully deleted a customer.')
	          res.redirect('/#customers');
	      });
	    }
	}
})();
