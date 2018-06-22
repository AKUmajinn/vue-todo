<template>
  <form @submit.prevent="addNewTask(nuevaTarea)"
        class="field has-addons">
  <p class="control is-expanded">
    <input v-model="nuevaTarea"
            type="text" class="input">
  </p>
  <div class="control">
    <button type="submit" class="button is-info">Añadir tarea</button>
  </div>
</form>

</template>
<script>
  import { bus } from './main.js'

  export default {
    data() {
      return {
        nuevaTarea:''
      }
    },
    props: ['tasks'],
    methods: {
      addNewTask() {
        var texto = this.nuevaTarea.trim();
        if(texto){
          this.tasks.push({
            titulo: texto,
            completada: false
          })

          ///this.upCounter();
          bus.upCounter(this.tasks.length)

        }
        this.nuevaTarea ="";
      }
    },
    created(){
      bus.upCounter(this.tasks.length)
    }
  }
</script>
