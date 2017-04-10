<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
  export default {
    name: 'app'
  }
</script>

<style>
  html, body {
    margin: 0;
    padding: 0;
  }
  * {
    box-sizing: border-box;
  }
  #app {
    font-family: 'Lantinghei SC', 'Helvetica Neue', Arial, 'Microsoft Yahei', sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
  }
</style>
