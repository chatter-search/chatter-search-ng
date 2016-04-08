/* global angular */
;(function () {
  'use strict'
  var app = angular.module('ChatterApp')
  app.controller('FormController', function ($http, $scope, UserService) {
    var that = this

    this.isExpanded = false
    this.isLoading = false

    this.expandSearch = function () {
      that.isExpanded = !that.isExpanded
    }
    this.submit = function () {
      that.isLoading = true
      UserService.all({
        screen_name: that.screenName
      })
      .then(
        function (resps) {
          that.isLoading = false
          $scope.user = resps[0].data
          $scope.twits = resps[1].data
        },
        function () {
          that.isLoading = false
        }
      )
    }
  })
})()
