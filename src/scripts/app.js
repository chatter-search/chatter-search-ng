/* global angular */
angular.module('ChatterApp', [])
.config(function (UserServiceProvider) {
  UserServiceProvider.setApiEndpoints({
    apiUri: 'https://chatter-search-api.herokuapp.com',
    userShow: '/1.2.0/user_show',
    userTimeline: '/1.2.0/user_timeline'
  })
})
