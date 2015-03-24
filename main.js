(function(){
  'use strict';
  var miApp = angular.module('MiAplicacion',[]);

  miApp.controller('MiControlador', function($scope,$http){

    $scope.nombre = 'Alejandro';
    $scope.apellido = 'Diaz';
    var promise = $http.get('https://api.github.com/users/arangelp').then(
      function(response){
        $scope.usuario = response.data;
    },
    function(error){
      console.log(error);
    });
  });
})();
