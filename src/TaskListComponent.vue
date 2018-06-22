<template>
  <ul class="c-task-list">
    <li v-for="(task, indice) of tasks" v-bind:class=" {'c-task-list--item__complete': task.completada} "
    class="card c-task-list--item"  type="">
      <div class="card-header">
        <p class="card-header-title c-task-list--title"> {{task.titulo}} </p>
        <div v-show="editandoTarea == indice"
          class="field has-addons">
          <div class="control is-expanded">
            <input v-model="task.titulo" v-on:blur="editandoTarea = null, editarTarea(task, indice)"
            type="text" class="input">
          </div>
          <div class="control">
            <a v-on:click="editandoTarea = null, editarTarea(task, indice)"
              class="button is-info">
              <span class="icon is-small">
                <i class="fas fa-save"></i>
              </span>
            </a>
          </div>
        </div>
      </div>
      <div class="buttons field is-grouped is-grouped-right card-content">
        <a v-on:click=" stateTask(indice) "
        class="button is-small  is-success" href="#">
        Completar/Rehacer
          <span class="icon is-small">
            <i v-if="!task.completada"
              class="fas fa-check"></i>
            <i v-else
              class="fas fa-redo-alt"></i>
          </span>
        </a>
        <a v-on:click="eliminarTarea(indice)"
        class="button is-small is-danger" href="#">
          Borrar
          <span class="icon is-small">
            <i class="far fa-trash-alt"></i>
          </span>
        </a>
        <a v-on:click="editandoTarea = indice"
        class="button is-small" href="#">
          Editar
          <span class="icon is-small">
            <i class="fas fa-pencil-alt"></i>
          </span>
        </a>
      </div>
    </li>
  </ul>
</template>
<script>
export default {
  props: ['tasks'],
  data(){
    return {
      editandoTarea: null
    }
  },
  methods: {
    stateTask(indice){
      let completada = this.tasks[indice].completada = !this.tasks[indice].completada
      let id = this.tasks[indice].id;

        this.$http.patch('tasks/' + id + '.json', {
          completada: completada
        }).then(response => {console.log(id)})
      },
    eliminarTarea (indice) {
      let id = this.tasks[indice].id;
      this.tasks.splice(indice,1);

      this.$http.delete('tasks/' + id + '.json').then(response => {console.log(response)})

    },
    editarTarea (tarea, indice) {
      let titulo = tarea
      let id = this.tasks[indice].id;
      console.log(titulo);

      this.$http.patch('tasks/' + id + '.json', {
          titulo: titulo
      }).then(response => {response})

    }
  }
}
</script>




<style>
ul.c-task-list {
  list-style: none;
  margin: 0;
}
.c-task-list .card {
  margin-bottom: 1em;
}
.c-task-list .card .card-header {
  flex-direction: column;
}
.c-task-list .card .card-header .field {
  padding: 0 .75rem;
}
.c-task-list .c-task-list--item__complete .c-task-list--title{
  text-decoration: line-through;
  color: grey;
  font-style: italic;
}
</style>
