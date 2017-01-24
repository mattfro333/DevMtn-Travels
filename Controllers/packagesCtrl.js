angular.module('devmtnTravel').controller('packagesCtrl',function($scope, $stateParams, mainService){
  $scope.packages = mainService.travelInfo;
});
