/* global angular */
angular.module('ChatterApp')
.filter('hasImageFilter', ($filter) => {
  return (twits, hasImage) => {
    if (hasImage) {
      twits = $filter('filter')(twits, (el, ix) => {
        return Boolean(el.photos)
      })
    }
    return twits
  }
})
