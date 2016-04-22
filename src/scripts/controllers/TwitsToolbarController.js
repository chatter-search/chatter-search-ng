/* global angular */
angular.module('ChatterApp')
.controller('TwitsToolbarController', ($scope, $filter) => {
  $scope.sortBy = 'created_at_timestamp'
  $scope.filter = {
    retweetCount: 0,
    hasImage: false
  }
})
