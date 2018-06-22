import Vue from 'vue'
import App from './App.vue'

export var bus = new Vue({
  methods: {
    upCounter(numTask){
      this.$emit('upCounter', numTask);
    }
  }
});

new Vue({
  el: '#app',
  render: h => h(App)
})
