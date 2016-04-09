/* global angular */
angular.module('ChatterApp')
.directive('twitsToolbar', function () {
  'use strict'
  return {
    restrict: 'E',
    templateUrl: 'templates/twitsToolbar.html',
    controller: 'TwitsToolbarController'
  }
})
