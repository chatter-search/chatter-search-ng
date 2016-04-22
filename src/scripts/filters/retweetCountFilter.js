/* global angular */
angular.module('ChatterApp')
.filter('retweetCountFilter', ($filter) => {
  return (twits, retweetCount) => {
    if (retweetCount) {
      twits = $filter('filter')(twits, (el, ix) => {
        return el.retweet_count > retweetCount
      })
    }
    return twits
  }
})
