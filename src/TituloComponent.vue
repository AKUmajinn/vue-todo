<template>
  <h1> {{ pageTitle }}
    <small>Tareas a hacer: {{ counter }}</small>
  </h1>

</template>
<script>
export default {
  props:['pageTitle'],
  computed: {
    tasks() {
      return this.$store.state.tasks;
    },
    counter() {
      return this.$store.getters.counter
    }
  },
  data() {
    return {
      count: 0
    }
  },
  methods: {
    counter() {
      this.$store.commit('counter');
    }
  },
  created() {
    //console.log(tasks);
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
