angular.module('devmtnTravel').controller('bookedCtrl', function($scope, $stateParams, mainService){
var id = $stateParams.id;
$scope.booked = mainService.booked(id);
})
