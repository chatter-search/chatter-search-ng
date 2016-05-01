/* global angular */
angular.module('ChatterApp')
.filter('retweetCountFilter', ($filter) => {
  return (tweets, retweetCount) => {
    if (retweetCount) {
      tweets = $filter('filter')(tweets, (el, ix) => {
        return el.retweet_count > retweetCount
      })
    }
    return tweets
  }
})
