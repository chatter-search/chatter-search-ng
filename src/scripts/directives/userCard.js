/* global angular */
angular.module('ChatterApp')
.directive('userCard', () => {
  return {
    restrict: 'E',
    templateUrl: 'templates/userCard.html',
    controller: 'UserController'
  }
})
