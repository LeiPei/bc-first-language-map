import Vue from 'vue'

// capitalize all letters from a string
Vue.filter('toupper', function (value) {
  if (!value) return ''
  value = value.toString()
  return value.toUpperCase()
})

Vue.filter('capitalize', function (value) {
  if (!value) return ''
  value = value.toString()
  return value.charAt(0).toUpperCase() + value.slice(1)
})
