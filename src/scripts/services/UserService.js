/* global angular */
;(function () {
  'use strict'
  var app = angular.module('ChatterApp')
  app.factory('UserService', [ function () {
    var observerCallbacks = []
    var notifyObservers = function () {
      angular.forEach(observerCallbacks, function (callback) {
        callback(scopeData)
      })
    }

    var scopeData = {
      userData: {},
      userTweets: []
    }

    return {
      registerObserver: function (callback) {
        observerCallbacks.push(callback)
      },

      setData: function (data) {
        scopeData = data
        notifyObservers()
      }
    }
  }])
})()
