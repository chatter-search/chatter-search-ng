/* global angular */
angular.module('ChatterApp')
.filter('hasImageFilter', ($filter) => {
  return (tweets, hasImage) => {
    if (hasImage) {
      tweets = $filter('filter')(tweets, (el, ix) => {
        return Boolean(el.photos)
      })
    }
    return tweets
  }
})
