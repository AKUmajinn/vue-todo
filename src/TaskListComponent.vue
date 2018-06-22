<template>
  <ul class="c-task-list">
    <li v-for="(task, indice) of tasks" v-bind:class=" {'c-task-list--item__complete': task.completada} "
    class="card c-task-list--item"  type="">
      <div class="card-header">
        <p class="card-header-title c-task-list--title"> {{task.titulo}} </p>
        <div v-show="editandoTarea == indice"
          class="field has-addons">
          <div class="control is-expanded">
            <input v-model="task.titulo" v-on:blur="editandoTarea = null, editaTarea(task)"
            type="text" class="input">
          </div>
          <div class="control">
            <a v-on:click="editandoTarea = null, editaTarea(task)"
              class="button is-info">
              <span class="icon is-small">
                <i class="fas fa-save"></i>
              </span>
            </a>
          </div>
        </div>
      </div>
      <div class="buttons field is-grouped is-grouped-right card-content">
        <a v-on:click=" task.completada = !task.completada "
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
    eliminarTarea (indice) {
      this.tasks.splice(indice,1);
    },
    editaTarea (tarea) {
      console.log(tarea);
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
