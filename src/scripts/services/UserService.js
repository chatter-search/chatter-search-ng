/* global angular */
;(function () {
  'use strict'
  var app = angular.module('ChatterApp')
  app.factory('UserService', [ function () {
    return {
      userData: {},
      userTweets: []
    }
  }])
})()
