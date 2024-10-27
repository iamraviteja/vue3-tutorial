<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <div id="container">
    <div class="sidebar">
      <nav>
        <RouterLink to="/section1" active-class="active">Section 1</RouterLink>
        <RouterLink to="/section2" active-class="active">Section 2</RouterLink>
        <RouterLink to="/section3" active-class="active">Section 3</RouterLink>
        <RouterLink to="/section4" active-class="active">Section 4</RouterLink>
        <RouterLink to="/section5" active-class="active">Section 5</RouterLink>
        <RouterLink to="/environment-variables" active-class="active"
          >Environment Variables</RouterLink
        >
        <RouterLink to="/debouncing" active-class="active"
          >Debouncing</RouterLink
        >
        <RouterLink to="/aborting-requests" active-class="active"
          >Aborting Requests</RouterLink
        >
        <RouterLink to="/axios-interceptors" active-class="active"
          >Axios Interceptors</RouterLink
        >
        <RouterLink to="/using-v-memo" active-class="active"
          >Using v-memo</RouterLink
        >
        <RouterLink to="/using-keep-alive" active-class="active"
          >Using keep-alive</RouterLink
        >
      </nav>
    </div>
    <div class="content">
      <RouterView />
    </div>
  </div>
</template>

<style scoped>
#container {
  display: flex;
  min-height: 100vh;
  width: 100%;
}

.sidebar {
  width: 200px;
  background-color: #f0f0f0;
  padding: 20px;
}

.content {
  flex-grow: 1;
  padding: 20px;
}

nav {
  display: flex;
  flex-direction: column;
}

nav a {
  padding: 10px;
  text-decoration: none;
  color: #333;
}

nav a.active {
  background-color: #ddd;
  font-weight: bold;
}
</style>
