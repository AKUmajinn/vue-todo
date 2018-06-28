import Vue from 'vue'
import App from './App.vue'
import VueResource from 'vue-resource'
import { store } from './store/store.js'



Vue.use(VueResource);
Vue.http.options.root = 'https://akuma-vue-todo.firebaseio.com'


/*import Firebase from 'Firebase'
import config from '../config'*/
//Firebase.initializeApp(config)

new Vue({
  store:store,
  el: '#app',
  render: h => h(App)
})
