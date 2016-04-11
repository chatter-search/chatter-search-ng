/* global angular */
angular.module('ChatterApp')
.provider('UserService', function UserServiceProvider () {
  'use strict'
  var apiUri
  var userShowUri
  var userTimelineUri

  this.setApiEndpoints = function (conf) {
    apiUri = conf.apiUri
    userShowUri = apiUri + conf.userShow
    userTimelineUri = apiUri + conf.userTimeline
  }

  this.$get = function ($http, $q) {
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
  }
})
