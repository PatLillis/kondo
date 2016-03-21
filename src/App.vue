<template>
  <div id="app">
    <!-- <div id="sun"></div> -->
    <h1 id="msg">{{{ msg | dewidow 3 }}}</h1>
  </div>
</template>

<script>
import quotes from "./_quotes.js"

export default {
  data () {
    return {
      // note: changing this line won't causes changes
      // with hot-reload because the reloaded component
      // preserves its current state and we are modifying
      // its initial state.
      msg: quotes[0]
    }
  }
}
</script>

<style>
  html, body {
    height: 100%;
    margin: 0;
    padding: 0;    
  }

  body {
    font-family: 'EB Garamond', serif;
    position: relative;
    background-image: url('./img/kondo_bg.jpg');
    background-size: cover;
  }

  #sun {
    position: absolute;
    top: 30px;
    right: 30px;
    height: 100px;
    width: 100px;
    border-radius: 50%;
    background-color: #CC212A;
    box-shadow: 5px 5px 20px rgba(0,0,0,0.3);
  }

  #msg {
    color: #CC212A;
    font-size: 32pt;
    position: absolute;
    left: 50px;
    bottom: 50px;
    margin: 0;
    right: 50px;
  }
</style>
