/* global angular */
angular.module('ChatterApp')
.directive('twitsList', function () {
  'use strict'
  return {
    restrict: 'E',
    templateUrl: 'templates/twitsList.html'
  }
})
