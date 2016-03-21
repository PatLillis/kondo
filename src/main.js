import Vue from 'vue'
import App from './App.vue'

Vue.filter('dewidow', function (value, numWords) {
	for (let i = 0, w = Math.max(numWords - 1, 0); i < w; i++)
  		value = value.replace(/ ([^ ]*)$/,'&nbsp;$1')

  	return value;
})

new Vue({
  el: 'body', 
  components: { App }
})
