/* global angular */
angular.module('ChatterApp')
.controller('TwitsToolbarController', ($scope, $filter) => {
  $scope.sortBy = 'created_at_timestamp'
  $scope.retweetCount = 0
  $scope.hasImage = false
})
