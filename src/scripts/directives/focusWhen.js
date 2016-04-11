/* global angular */
angular.module('ChatterApp')
.directive('focusWhen', ['$timeout', ($timeout) => {
  'use strict'
  var checkDirectivePrerequisites = (attrs) => {
    if (!attrs.focusWhen && attrs.focusWhen !== '') {
      throw new Error({
        message: 'FocusOnCondition missing attribute to evaluate'
      })
    }
  }

  return {
    restrict: 'A',
    link: (scope, element, attrs, ctrls) => {
      checkDirectivePrerequisites(attrs)

      scope.$watch(attrs.focusWhen, (currentValue, lastValue) => {
        $timeout(() => {
          if (currentValue === true) {
            element[0].focus()
          } else {
            element[0].blur()
          }
        })
      })
    }
  }
}])
