<template>
  <h1> {{ pageTitle }}
    <small>Tareas a hacer: {{ numTask }}</small>
  </h1>

</template>
<script>
import { bus } from './main.js'

export default {
  props:['pageTitle'],
  data(){
    return {
      numTask: 0
    }
  },
  created(){
    bus.$on('upCounter', (numTask)=>{
      this.numTask = numTask;
    })
  }
}
</script>

<style>
  h1 small {
    display: block;
    margin-top: 0.5em;
    font-size: .5em;
    font-weight: 400;
    font-style: italic;
    color: gray;
  }

</style>
