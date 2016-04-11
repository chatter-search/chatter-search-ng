/* global angular */
angular.module('ChatterApp')
.directive('twitsList', () => {
  return {
    restrict: 'E',
    templateUrl: 'templates/twitsList.html'
  }
})
