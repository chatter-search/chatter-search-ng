/* global angular */
angular.module('ChatterApp')
.directive('twitsToolbar', () => {
  'use strict'
  return {
    restrict: 'E',
    templateUrl: 'templates/twitsToolbar.html',
    controller: 'TwitsToolbarController'
  }
})
