/* global angular */
;(function () {
  'use strict'
  var app = angular.module('ChatterApp')
  app.directive('userCard', [function ($timeout) {
    return {
      restrict: 'E',
      templateUrl: 'templates/userCard.html',
      controller: 'UserController'
    }
  }
  ])
})()
