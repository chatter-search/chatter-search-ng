/* global angular */
angular.module('ChatterApp')
.filter('retweetCountFilter', ($filter) => {
  return (twits, filter) => {
    if (twits && filter) {
      if (filter.retweetCount) {
        twits = $filter('filter')(twits, (el, ix) => {
          return el.retweet_count > filter.retweetCount
        })
      }
      filter.isNothingFound = !twits.length
      return twits
    }
  }
})
