<template>
  <nav>
    <router-link to="/">Home</router-link> |
    <router-link :to="{ name: 'about' }">About</router-link> |
    <router-link :to="{ name: 'jobs' }">Jobs</router-link>
  </nav>

  <button @click="goBack">Go Back</button>
  <button @click="redirect">Redirect</button>
  <button @click="goForward">Go Forward</button>

  <router-view />
</template>

<script setup lang="ts">
import { useRouter } from "vue-router";
const router = useRouter();

const redirect = () => {
  // These three are equivalent
  // router.push("/");
  // router.push({ path: "/" });
  router.push({ name: "home" });
};

const goBack = () => {
  router.go(-1);
};

const goForward = () => {
  router.go(1);
};
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

button {
  margin: 0 10px;
  padding: 10px;
  border-radius: 4px;
  border: none;
}
</style>
