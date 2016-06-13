custOrdersApp.factory('customersFactory',function($http){
        var factory= {};
        factory.getCustomers = function(callback){
          $http.get('/customerObjects').success(function(output){
            // this is pulling data from  /customerObjects, and 
            //   /customerObjects is pulling data from the database
              customers = output;
              callback(customers);
          });
        };
        factory.addCustomer = function(info,callback){
            $http.post('/save',info).success(function(info2){
              callback(info2);
            });
        };
      return factory;
});
