/* global angular */
angular.module('ChatterApp')
.directive('twitsToolbar', () => {
  return {
    restrict: 'E',
    templateUrl: 'templates/twitsToolbar.html',
    controller: 'TwitsToolbarController'
  }
})
