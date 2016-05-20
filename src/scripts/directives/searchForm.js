/* global angular */
angular.module('ChatterApp')
.directive('searchForm', () => {
  return {
    restrict: 'E',
    templateUrl: 'templates/searchForm.html',
    controller: 'FormController'
  }
})
