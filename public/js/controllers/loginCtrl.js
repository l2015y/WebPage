databaseApp.controller("loginCtrl", ['$scope','$http', '$location','Registration', function($scope, $http, $location,Registration){
    $scope.submitUser = function(user,logForm){
        console.log($scope.user);
            Registration.login($scope.user)
                .success(function(data){
                    console.log(data);
                    $location.path('/').replace();
                })
                .error(function (err) {
                    console.log(err);
                });

    };

    $scope.changeUser = function(){
        Registration.change()
            .success(function(data){
                console.log("User was changed");
                $location.path('/').replace();
            })
            .error(function (err) {
                console.log(err);
            });
    }



}]);