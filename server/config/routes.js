var customers = require('../controllers/backCustCtrlr.js');
var orders = require('../controllers/backOrdersCtrlr.js');
var products = require('../controllers/backProdCtrlr.js');

module.exports = function(app) {


 	// render index.html
 	app.get('/', function(req, res) {
         res.render('index');
 	});


 	// save customers.html input
 	app.post('/save', function(req,res){
 		customers.save(req,res);
 	});
 	//  retrieve customers.html input from database and print 
 	// them on localhost:8000/customerObjects in json
 	app.get('/customerObjects', function(req,res){
 		customers.show(req,res);
 	});
 	//  delete customers.html input from database
 	app.get('/destroy/:id', function(req,res){
 		customers.destroy(req,res);
 	});



 	// save orders.html input
 	// also update product quantity in product collection
 	//          in the database
 	app.post('/orderSave', function(req,res){
 		products.subtractProdQuant(req,res);
 		orders.save2(req,res);
 	});

 	// retrieve orders.html input from database
 	app.get('/orderObjects', function(req,res){
 		orders.show2(req,res);
 	});



 	//  save products.html input
 	app.post('/productSave', function(req,res){
 		products.save(req,res);
 	});

 	// retrieve products.html inmput from database
 	app.get('/productObjects', function(req,res){
 		products.show(req,res);
 	});
 	// decrement inventory ammount of product
 	app.post('/updateProducts', function(req,res){
 		products.update(req,res);
 	});

};