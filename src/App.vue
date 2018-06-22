<template>
  <div id="app">
    <div class="content">
      <div class="columns">
        <div class="column is-6 is-offset-3 c-to-Do">
          <page-title v-bind:pageTitle="pageTitle" v-bind:tasks="tasks"></page-title>
          <add-new-task v-bind:tasks="tasks"
                        v-bind:upCounter="upCounter">
          </add-new-task>
          <task-list v-bind:tasks="tasks"></task-list>

        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import PageTitle from './TituloComponent.vue'
  import AddNewTask from './AddNewTask.vue'
  import TaskList from './TaskListComponent.vue'


  export default {
    components: {
      PageTitle,
      AddNewTask,
      TaskList
    },
    data() {
      return {
        pageTitle: 'To Do App',
        tasks: [],
      }
    },
    methods: {
      upCounter(){
        this.numTask++;
      }
    },
    created(){

      this.$http.get('tasks.json')
      .then(response => {
        return response.json();
      })
      .then(responseJson => {
        for(let id in responseJson){
          let task = {
            id: id,
            titulo: responseJson[id].titulo,
            completada: responseJson[id].terminada
          }
          this.tasks.push(task)
        }
      })
    }
  }
</script>
