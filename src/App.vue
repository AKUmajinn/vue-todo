<template>
  <div class="content">
    <div class="columns">
      <div class="column is-6 is-offset-3 c-to-Do">
        <page-title v-bind:pageTitle="pageTitle"></page-title>
        <add-new-task></add-new-task>
        <task-list></task-list>

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
        pageTitle: 'To Do App'
      }
    },
    mounted(){
      this.$store.dispatch('getFirebaseData');
    }
  }
</script>
<style>

</style>
