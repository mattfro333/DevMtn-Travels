angular.module('devmtnTravel').controller('locationsCtrl', function($scope, $stateParams, mainService){
  $scope.locations = mainService.travelInfo;
});
