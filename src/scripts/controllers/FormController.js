/* global angular */
;(function () {
  'use strict'
  var app = angular.module('ChatterApp')
  app.controller('FormController', ['$http', 'UserService', function ($http, UserService) {
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
        function (resp) {
          var data = resp.data
          _self.isLoading = false
          UserService.userData.name = data && data.name
          UserService.userData.profile_image_url_https = data && data.profile_image_url_https
          UserService.userData.screen_name = data && data.screen_name
          UserService.userData.description = data && data.description
        },
        function () {
          _self.isLoading = false
        }
      )
    }
  }])
})()
