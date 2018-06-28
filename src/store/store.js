import Vue from 'vue';
import Vuex from 'vuex';
//import { database } from '../firebase.config'

/*import config from '../firebase.config';
import Firebase from 'Firebase';*/
//Firebase.initializeApp(config);
Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    //db: Firebase.database()
    tasks:[]
  },
  getters:{
    //llamado en TitleComponent
    counter(state) {
      return state.tasks.length;
    }
  },
  mutations: {
    getFirebaseData(state) {
      Vue.http.get('tasks.json')
      .then(response => {
        return response.json();
      })
      .then(responseJson => {
        console.log('2sa');
        for(let id in responseJson){
          let task = {
            id: id,
            title: responseJson[id].title,
            completed: responseJson[id].terminada
          }
          state.tasks.push(task)
        }
      })
    },
    stateTask(state, index){
      let completed = state.tasks[index].completed = !state.tasks[index].completed
      let id =  state.tasks[index].id;

      //conecta a firebase con vue resourse, en store no usar this. en cambio usar Vue. parapara hacer referencia al object Vue general y no a Vuex
      Vue.http.patch('tasks/' + id + '.json', {
        completed: completed
      }).then(response => {console.log(state.tasks[index])})
    },
    deleteTask(state, index){
      let id = state.tasks[index].id;
      state.tasks.splice(index,1);
      Vue.http.delete('tasks/' + id + '.json').then(response => {console.log(response)})
    },
    editTask(state, {task, index}){
      let id = state.tasks[index].id;
      let title = state.tasks[index].title = task;
      console.log(title);

      Vue.http.patch('tasks/' + id + '.json', {
          title: title
      }).then(response => {response})

    },
    addNewTask(state, text) {
      if(text){
        state.tasks.push({
          title: text,
          completed: false
        })
      }
      state.newTask ="";
      //.http lo trae exclusivamente vue-resource, tasks.json es creado ahi, el .post() necesita un nodo para recibir la data
      Vue.http.post('tasks.json', {
        title: text,
        completed: false
      }).then(response => console.log(response));
    }
  },
  actions: {
    stateTask (context, index) {
    //llamado en taskListComponent
      context.commit('stateTask', index);
    },
    deleteTask(context, index) {
    //llamado en taskListComponent
      context.commit('deleteTask', index);
    },
    editTask(context, {task, index}) {
     //llamado en taskListComponent
      context.commit('editTask', {task, index});
    },
    addNewTask(context, text) {
    //llamado en TitleComponent
      context.commit('addNewTask', text);
    },
    //llamado en App.vue para que se cargue ni bien es creada la APP y traiga la data
    getFirebaseData(context) {
      context.commit('getFirebaseData');
    }
  }

})
