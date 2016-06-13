custOrdersApp.controller('ordersController',function($scope,ordersFactory,productsFactory,customersFactory){

  // ************* ORDER CONTROLLER ******************
  // ************* ORDER CONTROLLER ******************
		ordersFactory.getOrders(function(data2){
			// console.log('front controller',data2);
			$scope.orders = data2;
		});

		$scope.addOrder = function(data){
			// console.log('data:',data);
			// console.log('new_order',$scope.new_order);
			ordersFactory.addOrder(data,function(data3){
				// console.log('data3',data3);
				$scope.orders.push(data3);
				$scope.new_order = {};
			});
		};
    // ************* ORDER CONTROLLER ******************
    // ************* ORDER CONTROLLER ******************





    // ******* CUSTOMER CONTROLLER ****************
		// ******* CUSTOMER CONTROLLER ****************
		customersFactory.getCustomers(function(data){
  		$scope.customers = data;
  		});
  		
  		$scope.addCustomer = function(data){
  			var duplicate_found = false;
  			for(var i in $scope.customers){
  				if($scope.new_customer.name === $scope.customers[i].name){
  					duplicate_found = true;
  					$scope.error = "There is already a user with that name."
  				}
  			}
  			if(!duplicate_found){
  			
  				customersFactory.addCustomer($scope.new_customer,function(data){
          			$scope.customers.push(data);
          			$scope.new_customer = {};
  				});
  			}
  		};
      // ******* CUSTOMER CONTROLLER ****************
      // ******* CUSTOMER CONTROLLER ****************





      //  ************ PRODUCT CONTROLLER *******************
      //  ************ PRODUCT CONTROLLER *******************
      productsFactory.getProducts(function(productsData){
          $scope.products = productsData;
      });
      $scope.addProduct = function(newProductData){
          productsFactory.addProduct(newProductData,function(newData){
            $scope.products.push(newData);
            $scope.new_product = {};

          });
      };
      // show more products in products.html
      var pagesShown = 1;
      var pageSize = 5;
      $scope.paginationLimit = function(){
        return pageSize * pagesShown;
      };
      $scope.showMoreItems = function(){
        pageSize = pageSize+5;
        
      };

      // show more orders in products.html
      var pagesShown2 = 1;
      var pageSize2= 3;
      $scope.paginationLimit2 = function(){
        return pageSize2 * pagesShown2;
      };
      $scope.showAllOrdersButton = function(){
        pageSize2 = pageSize2 * 100;
      };

      // show more customers in products.html
      var pagesShown3 = 1;
      var pageSize3 = 3;
      $scope.paginationLimit3 = function(){
        return pageSize3 * pagesShown3;
      };
      $scope.showAllCustomersButton = function(){
        pageSize3 = pageSize3 + 10000000000000;
      };
      //  ************ PRODUCT CONTROLLER *******************
      //  ************ PRODUCT CONTROLLER *******************
});




