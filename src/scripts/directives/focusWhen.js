/* global angular */
;(function () {
  'use strict'
  var app = angular.module('ChatterApp')
  app.directive('focusWhen', ['$timeout',
    function ($timeout) {
      var checkDirectivePrerequisites = function (attrs) {
        if (!attrs.focusWhen && attrs.focusWhen !== '') {
          throw new Error({
            message: 'FocusOnCondition missing attribute to evaluate'
          })
        }
      }

      return {
        restrict: 'A',
        link: function (scope, element, attrs, ctrls) {
          checkDirectivePrerequisites(attrs)

          scope.$watch(attrs.focusWhen, function (currentValue, lastValue) {
            $timeout(function () {
              if (currentValue === true) {
                element[0].focus()
              } else {
                element[0].blur()
              }
            })
          })
        }
      }
    }
  ])
})()
