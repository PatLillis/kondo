<template>
  <div id="app">
    <h1 id="msg">{{{ msg | dewidow 3 }}}</h1>
  </div>
</template>

<script>
import quote from "./quotes.js"
console.log();
export default {
  computed: {
    // a computed getter
    msg: quote
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
    background-position: center;
    background-repeat: no-repeat;
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
