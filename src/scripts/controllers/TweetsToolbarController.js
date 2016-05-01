/* global angular */
angular.module('ChatterApp')
.controller('TwitsToolbarController', ($scope, $filter) => {
  $scope.sortBy = 'created_at_timestamp'
  $scope.sortByDir = -1
  $scope.filter = {
    retweetCount: 0,
    hasImage: false
  }
  $scope.isDecending = () => { return $scope.sortByDir === -1 }
})
