/* global angular */
angular.module('ChatterApp')
.directive('userCard', () => {
  'use strict'
  return {
    restrict: 'E',
    templateUrl: 'templates/userCard.html',
    controller: 'UserController'
  }
})
