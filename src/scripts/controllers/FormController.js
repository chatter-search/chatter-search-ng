/* global angular */
angular.module('ChatterApp')
.controller('FormController', ($scope, UserService) => {
  $scope.isExpanded = false
  $scope.isLoading = false

  $scope.expandSearch = () => {
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
        $scope._twits = resps[1].data.slice()
        $scope.twits = resps[1].data
      },
      () => {
        $scope.isLoading = false
      }
    )
  }
})
