import Vue from 'vue'
import App from './App.vue'
import VueResource from 'vue-resource'

export var bus = new Vue({
  methods: {
    upCounter(numTask){
      this.$emit('upCounter', numTask);
    }
  }
});

Vue.use(VueResource);
Vue.http.options.root = 'https://akuma-vue-todo.firebaseio.com'

new Vue({
  el: '#app',
  render: h => h(App)
})
