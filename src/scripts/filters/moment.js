/* global angular moment*/
angular.module('ChatterApp')
.filter('moment', () => {
  return (time, format) => {
    return moment(time).fromNow()
  }
})
