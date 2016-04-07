/* global angular */
;(function () {
  'use strict'
  var app = angular.module('ChatterApp')
  app.controller('UserController', ['$http', '$scope', 'UserService', function ($http, $scope, UserService) {
    var userData = UserService.userData
    $scope.user = userData
    $scope.isShowCard = function () {
      var isShow = Boolean(userData.name)
      return isShow
    }
  }])
})()
