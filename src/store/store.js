import Vue from 'vue';
import Vuex from 'vuex';
/*import config from '../firebase.config';
import Firebase from 'Firebase';*/
//Firebase.initializeApp(config);
Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    //db: Firebase.database()
    tasks : [
      {
        title: 'Trabajar',
        completed: false
      },
      {
        title: 'GYM',
        completed: false
      },
      {
        title: 'Limpiar',
        completed: false
      },
      {
        title: 'Dormir',
        completed: false
      }
    ]
  },
  getters:{
    //llamado en TitleComponent
    counter(state) {
      return state.tasks.length;
    }
  },
  mutations: {
    stateTask(state, index){
      state.tasks[index].completed = !state.tasks[index].completed;

      //******codigo antiguo que modificaba directo en firebase con vue-resource******
      //--------------------------------------------------------------
      /*let completed = this.tasks[index].completed = !this.tasks[index].completed
      let id = this.tasks[index].id;

        this.$http.patch('tasks/' + id + '.json', {
          completed: completed
        }).then(response => {console.log(id)})*/
    },
    deleteTask(state, index){
      state.tasks.splice(index,1);

    //******codigo antiguo que modificaba directo en firebase con vue-resource******
      //--------------------------------------------------------------
      /*let id = this.tasks[index].id;
      this.tasks.splice(index,1);
      this.$http.delete('tasks/' + id + '.json').then(response => {console.log(response)})*/
    },
    editTask(state, {task, index}){
      state.tasks[index].title = task;

    //******codigo antiguo que modificaba directo en firebase con vue-resource******
    //--------------------------------------------------------------------
    /*let id = this.tasks[index].id;
    console.log(title);

    this.$http.patch('tasks/' + id + '.json', {
        title: title
    }).then(response => {response})*/

    },
    addNewTask(state, text) {
      if(text){
        state.tasks.push({
          title: text,
          completed: false
        })
      }
    //******codigo antiguo que modificaba directo en firebase con vue-resource******
    //--------------------------------------------------------------------
    /*;
      if(texto){
        this.tasks.push({
          titulo: texto,
          completada: false
        })
      }
      this.newTask ="";
      //.$http lo trae exclusivamente vue-resource, tasks.json es inventado, el .post() necesita un nodo para recibir la data
      this.$http.post('tasks.json', {
        titulo: texto,
        completada: false
      }).then(response => console.log(response));*/
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
    }


  }

})
