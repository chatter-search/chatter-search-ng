/* global angular */
angular.module('ChatterApp')
.provider('UserService', function UserServiceProvider () {
  var userShowUri
  var userTimelineUri

  this.setApiEndpoints = (conf) => {
    var apiUri = conf.apiUri
    userShowUri = apiUri + conf.userShow
    userTimelineUri = apiUri + conf.userTimeline
  }

  this.$get = ($http, $q) => {
    return {
      all: function (params) {
        var user = $http.get(userShowUri,
          {
            params
          }
        )
        var tweets = $http.get(userTimelineUri,
          {
            params
          }
        )
        return $q.all([user, tweets])
      }
    }
  }
})
