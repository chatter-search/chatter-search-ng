/* global angular */
angular.module('ChatterApp')
.controller('FormController', ($scope, UserService) => {
  $scope.isExpanded = false
  $scope.isLoading = false

  $scope.expandSearch = () => {
    if ($scope.isExpanded) {
      $scope.user = null
      $scope.twits = null
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
        $scope.user = resps[0].data
        $scope.twits = resps[1].data
      },
      () => {
        $scope.isLoading = false
      }
    )
  }
})
