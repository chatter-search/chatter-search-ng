/* global angular */
angular.module('ChatterApp')
.directive('twitsList', () => {
  'use strict'
  return {
    restrict: 'E',
    templateUrl: 'templates/twitsList.html'
  }
})
