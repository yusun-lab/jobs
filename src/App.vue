<template>
  <nav>
    <!-- router-link is a component that creates a link to a route. 
     Has two attributes: to and exact. to is the path to the route, exact is a boolean that indicates if the link should be active when the path is exactly the same as the current path.

     Vue intercepts the request to get those new routes, because we use this special tag with that behavior built into it.

     router-link has that behavior of intercepting the request and getting the new routes -->
    <router-link to="/">Home</router-link> |
    <router-link :to="{ name: 'about' }">About</router-link>
    <!-- a tag would just send a fresh request to the server -->
    <!-- <a href="/about">About</a> -->
  </nav>
  <!-- router-view is where the content of the current route will be rendered -->
  <router-view />
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "App",
});
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
  padding: 10px;
  text-decoration: none;
  border-radius: 4px;
}

nav a.router-link-exact-active {
  color: white;
  background: crimson;
}
</style>
