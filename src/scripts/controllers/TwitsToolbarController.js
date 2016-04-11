/* global angular */
angular.module('ChatterApp')
.controller('TwitsToolbarController', ($scope, $filter) => {
  $scope.sortBy = 'created_at_timestamp'
  $scope.retweetCount = 0
  $scope.hasImage = false

  function doFilter (twits) {
    if ($scope.hasImage) {
      twits = $filter('filter')(twits, (el, ix) => {
        return Boolean(el.photos)
      })
    }
    if ($scope.retweetCount) {
      twits = $filter('filter')(twits, (el, ix) => {
        return el.retweet_count > $scope.retweetCount
      })
    }
    return twits
  }

  $scope.filter = () => {
    var twits = doFilter($scope._twits.slice())

    $scope.twits = doOrder(twits)
  }

  function doOrder (twits) {
    return $filter('orderBy')(twits, $scope.sortBy, true)
  }
  $scope.order = () => {
    $scope.twits = doOrder($scope.twits)
  }
})
