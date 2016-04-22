/* global angular */
angular.module('ChatterApp')
.filter('hasImageFilter', ($filter) => {
  return (twits, filter) => {
    if (twits && filter) {
      if (filter.hasImage) {
        twits = $filter('filter')(twits, (el, ix) => {
          return Boolean(el.photos)
        })
      }
      filter.isNothingFound = !twits.length

      return twits
    }
  }
})
