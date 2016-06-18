var custOrdersApp = angular.module('custOrdersApp', ['ngRoute'])

      custOrdersApp.config(function($routeProvider){
        $routeProvider
        .when('/orders',{
          templateUrl: 'partials/orders.html'
        })
        .when('/customers',{
          templateUrl: 'partials/customers.html'
        })
        .when('/dashboard',{
          templateUrl: 'partials/dashboard.html'
        })
        .when('/products',{
          templateUrl: 'partials/products.html'
        })
        .otherwise({
          redirectTo: '/'
        });
      })