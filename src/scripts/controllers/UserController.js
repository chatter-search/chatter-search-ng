/* global angular */
;(function () {
  'use strict'
  var app = angular.module('ChatterApp')
  app.controller('UserController', ['$http', '$scope', 'UserService', function ($http, $scope, UserService) {
    UserService.registerObserver(function (data) {
      $scope.user = data.userData
      $scope.tweets = data.userTweets
    })
  }])
})()
