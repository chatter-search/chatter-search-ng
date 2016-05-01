/* global angular */
angular.module('ChatterApp')
.directive('tweetsToolbar', () => {
  return {
    restrict: 'E',
    templateUrl: 'templates/tweetsToolbar.html',
    controller: 'TweetsToolbarController'
  }
})
