custOrdersApp.factory('productsFactory',function($http){
	  var factory = {};
	  factory.getProducts = function(callback){
	  	$http.get('productObjects').success(function(output){
	  		products = output;
	  		callback(products);
	  	})
	  }
	  factory.addProduct = function(info,callback){
	  	$http.post('/productSave',info).success(function(info5){
	  		callback(info5);
	  	});
	  };
	  return factory;
});