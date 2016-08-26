databaseApp.controller("staffListCtrl", ['$scope','$http', '$location','Staff','$routeParams', function($scope, $http, $location,Staff,$routeParams){

    Staff.getStaff().success(function(data){
        $scope.workers = data;
        console.log($scope.staff);
    });


    $scope.submitStaff = function(staff,addStaff) {
        if (addStaff.$valid) {
            console.log($scope.staff);
            Staff.addStaff($scope.staff).success(function (data) {
                console.log(data);
                $location.path('/').replace();
            })
                .error(function (err) {
                    console.log(err);
                })
        }
    }



}]);