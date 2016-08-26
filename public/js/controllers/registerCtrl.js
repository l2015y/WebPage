databaseApp.controller("registerCtrl", ['$scope','$http', '$location',"Registration", function($scope, $http, $location,Registration){
    $scope.submitNewUser = function(newUser,regForm) {
        if (regForm.$valid) {
            console.log($scope.newUser);
            Registration.register($scope.newUser).success(function (data) {
                console.log(data);
                $location.path('/').replace();
            })
                .error(function (err) {
                    console.log(err);
                })
        }
    }


}]);