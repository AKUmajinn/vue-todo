import Vue from 'vue'
import App from './App.vue'
import { store } from './store/store.js'

//import { store } from 'vue-resource'
/*
export var bus = new Vue({
  methods: {
    upCounter(numTask){
      this.$emit('upCounter', numTask);
    }
  }
});*/

new Vue({
  store:store,
  el: '#app',
  render: h => h(App)
})
