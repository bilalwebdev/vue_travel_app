<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <div id="nav">
    <RouterLink to="/">Home</RouterLink>
    <RouterLink to="/brazil">Brazil</RouterLink>
    <RouterLink to="/jamaica">Jamaica</RouterLink>
    <RouterLink to="/hawaii">Hawaii</RouterLink>
  </div>

  <div class="conatiner">
    <RouterView />
  </div>
</template>

<style scoped>
#app {
  font-family: Arial, Helvetica, sans-serif;
  -webkit-font-smoothing: antialaied;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}
</style>
