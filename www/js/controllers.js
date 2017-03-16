angular.module('starter.controllers', [])

  .controller('driversController', function($scope, formula1Services) {
  
    $scope.driversList = [];
    formula1Services.getDrivers().success(function (data) {
          $scope.driversList = data.MRData.StandingsTable.StandingsLists[0].DriverStandings;
    });
  })

  .controller('teamsController', function($scope, formula1Services) {
    $scope.teamsList = [];
   

    formula1Services.getTeams().success(function (data) {
        $scope.teamsList = data.MRData.StandingsTable.StandingsLists[0].ConstructorStandings;
    });
    });




  

 
   
     