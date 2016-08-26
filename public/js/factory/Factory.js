databaseApp.factory('Registration',[
  '$http', function($http){
    return {
      register: function (newUser) {
        return $http
            .post('/api/register', newUser)
      },

      login: function (user){
        return $http
            .post('/api/login',user)
      }

    }


  }
]);


databaseApp.factory('Staff',[
  '$http', function($http){
    return {
      addStaff: function (staff) {
        return $http
            .post('/api/addStaff', staff)
      },
      getStaff:function(){
        return $http
        .get('/api/allStaff')
      }

      /*delete:function(){
        return $http
            .delete('/api/staff/' + $routeParams.workerID)
      }*/



    }


  }
]);
