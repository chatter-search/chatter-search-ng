/* global angular */
;(function () {
  'use strict'
  var app = angular.module('ChatterApp')
  app.factory('UserService', function ($http, $q) {
    var apiUri = 'https://chatter-search-api.herokuapp.com'
    var userShowUri = apiUri + '/1.2.0/user_show'
    var userTimelineUri = apiUri + '/1.2.0/user_timeline'

    return {
      all: function (params) {
        var user = $http.get(userShowUri,
          {
            params: params
          }
        )
        var tweets = $http.get(userTimelineUri,
          {
            params: params
          }
        )
        return $q.all([user, tweets])
      }
    }
  })
})()
