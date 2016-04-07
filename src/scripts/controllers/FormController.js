/* global angular */
;(function () {
  'use strict'
  var app = angular.module('ChatterApp')
  app.controller('FormController', ['$http', function ($http) {
    var _self = this
    var apiUri = 'https://chatter-search-api.herokuapp.com'
    var userShowUri = apiUri + '/1.2.0/user_show'

    this.isExpanded = false
    this.isLoading = false

    this.expandSearch = function () {
      _self.isExpanded = !_self.isExpanded
    }
    this.submit = function () {
      _self.isLoading = true
      $http.get(userShowUri,
        {
          params: {
            screen_name: _self.screenName
          }
        }
      )
      .then(
        function (data) {
          _self.isLoading = false
          console.log(data)
        },
        function () {
          _self.isLoading = false
        }
      )
    }
  }])
})()
