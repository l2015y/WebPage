var databaseApp = angular.module("databaseApp",['ngRoute']);

databaseApp.config(['$routeProvider', '$locationProvider', function($routeProvide, $locationProvider){
$routeProvide
    .when('/',{
        templateUrl: '././templates/home.html',
        controller: 'staffListCtrl'
    })
    .when('/login',{
        templateUrl: '././templates/login.html',
        controller:'loginCtrl'
    })
    .when('/register',{
        templateUrl: '././templates/register.html',
        controller:'registerCtrl'
    })


    .otherwise({
        redirectTo: '/'
    });

}]);