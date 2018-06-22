<template>
  <div id="app">
    <div class="content">
      <div class="columns">
        <div class="column is-6 is-offset-3 c-to-Do">
          <page-title v-bind:pageTitle="pageTitle"></page-title>
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
        tasks: [
          {
            titulo: 'Trabajar',
            completada: false
          },
          {
            titulo: 'GYM',
            completada: false
          },
          {
            titulo: 'Limpiar',
            completada: false
          },
          {
            titulo: 'Dormir',
            completada: false
          }
        ],

      }
    },
    methods: {
      upCounter(){
        this.numTask++;
      }
    }
  }
</script>
