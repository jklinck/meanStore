custOrdersApp.factory('ordersFactory',function($http){
      var factory = {};
      factory.getOrders = function(callback){
        $http.get('orderObjects').success(function(output){
          orders = output;
          callback(orders);
        });
      };
      factory.addOrder = function(info3,callback){
        $http.post('/orderSave',info3).success(function(info4){
          callback(info4);
        });
      };
    return factory;
});
