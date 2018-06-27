<template>
  <form @submit.prevent="addNewTask(newTask)"
        class="field has-addons">
  <p class="control is-expanded">
    <input v-model="newTask"
            type="text" class="input">
  </p>
  <div class="control">
    <button type="submit" class="button is-info">Añadir tarea</button>
  </div>
</form>

</template>
<script>
  //import { bus } from './main.js'
  export default {
    data() {
      return {
        newTask:''
      }
    },
    computed: {
      tasks(){
        return this.$store.state.tasks;
      }
    },
    methods: {
      addNewTask() {
        var text = this.newTask.trim()
        this.$store.dispatch('addNewTask', text);
        this.newTask ="";
      }
    }
  }
</script>
