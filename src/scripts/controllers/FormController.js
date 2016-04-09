/* global angular */
angular.module('ChatterApp')
.controller('FormController', function ($scope, UserService) {
  'use strict'
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
        $scope._twits = resps[1].data.slice()
        $scope.twits = resps[1].data
      },
      function () {
        that.isLoading = false
      }
    )
  }
})
