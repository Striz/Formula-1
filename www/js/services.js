angular.module('starter.services', [])

.factory('formula1Services', function($http) {
// 
    var formulaAPI = {};

   formulaAPI.getDrivers = function() {
      return $http({
        method: 'JSONP', 
        url: 'http://ergast.com/api/f1/2013/driverStandings.json?callback=JSON_CALLBACK'
      });
    }

       formulaAPI.getTeams = function() {
      return $http({
        method: 'JSONP', 
        url: 'http://ergast.com/api/f1/2013/constructorStandings.json?callback=JSON_CALLBACK'
      });
    }

     formulaAPI.getRaces = function() {
      return $http({
        method: 'JSONP', 
        url: 'http://ergast.com/api/f1/2013.json?callback=JSON_CALLBACK'
      });
    }


/*
.controller('f1Controller', ['$scope','$http', function($scope, $http) {
  $scope.driversList = undefined;   $http.get('http://ergast.com/api/f1/2013/constructorStandings.json?callback=JSON_CALLBACK')
    .then(function(driversList){
      $scope.driversList = driversList.MRData.StandingsTable.StandingsLists[0].ConstructorStandings;
    })
 }]);
 */

  

    return formulaAPI;
  });
