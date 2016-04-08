/* global angular */
;(function () {
  'use strict'
  var app = angular.module('ChatterApp')
  app.controller('FormController', ['$http', 'UserService', function ($http, UserService) {
    var _self = this
    var apiUri = 'https://chatter-search-api.herokuapp.com'
    var userShowUri = apiUri + '/1.2.0/user_show'
    var userTimelineUri = apiUri + '/1.2.0/user_timeline'

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
        function (resp) {
          var data = resp.data
          _self.isLoading = false
          UserService.setUserData(data)
        },
        function () {
          _self.isLoading = false
        }
      )
    }
  }])
})()
