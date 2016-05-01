/* global angular */
angular.module('ChatterApp')
.directive('tweetsList', () => {
  return {
    restrict: 'E',
    templateUrl: 'templates/tweetsList.html'
  }
})
