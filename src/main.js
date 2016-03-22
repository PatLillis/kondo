import Vue from 'vue'
import App from './App.vue'

Vue.config.debug = true

Vue.filter('dewidow', function(value, numWords) {
	// Try to replace the last few spaces with &nbsp;
    if (value && value.replace) {
        for (let i = 0, w = Math.max(numWords - 1, 0); i < w; i++)
            value = value.replace(/ ([^ ]*)$/, '&nbsp;$1')
    }

    return value;
})

new Vue({
    el: 'body',
    components: {
        App
    }
})
