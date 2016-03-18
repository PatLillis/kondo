<template>
  <div id="app">
    <h1>{{ msg }}</h1>
  </div>
</template>

<script>
export default {
  data () {
    return {
      // note: changing this line won't causes changes
      // with hot-reload because the reloaded component
      // preserves its current state and we are modifying
      // its initial state.
      msg: 'Hello Vue!'
    }
  }
}
</script>

<style>
  body {
    font-family: Helvetica, sans-serif;
    background: #B1FFFC;
  }

  #app {
    text-align: center;
    margin-top: 10%;
  }

  h1 {
    color:#FF4748;
    font-size: 64px;
  }
</style>
