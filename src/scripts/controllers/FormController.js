/* global angular */
angular.module('ChatterApp')
.controller('FormController', ($rootScope, $scope, UserService) => {
  $scope.isExpanded = false
  $scope.isLoading = false

  $scope.expandSearch = () => {
    if ($scope.isExpanded) {
      $scope.user = null
      $scope.tweets = null
    }
    $scope.isExpanded = !$scope.isExpanded
  }
  $scope.submit = () => {
    $scope.isLoading = true
    UserService.all({
      screen_name: $scope.screenName
    })
    .then(
      (resps) => {
        $scope.isLoading = false
        $rootScope.user = resps[0].data
        $rootScope.tweets = resps[1].data
      },
      () => {
        $scope.isLoading = false
      }
    )
  }
})
