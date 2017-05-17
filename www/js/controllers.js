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
    })
  //RACES CONTROLLER my one
  .controller('racesController', function($scope, formula1Services) {
    
    $scope.racesList = [];
//     $scope.filterName = null;
// $scope.pastRaces = [];
//     formula1Services.getRaceWinners().success(function (data) {
//         //Dig into the response to get the relevante data
//         $scope.pastRaces = data.MRData.RaceTable.Races;
// formula1Services.getRaces().success(function (data) {
//   $scope.racesList = data.MRData.RaceTable.Races;
//             angular.forEach($scope.pastRaces, function(race, index){
//                 //Push each winning driver into raceList
//                 $scope.racesList[index].Results = race.Results;

    formula1Services.getRaces().success(function (data) {
        $scope.racesList = data.MRData.RaceTable.Races;
    });
  });

  
 
 
   
     