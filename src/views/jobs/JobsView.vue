<template>
  <h1>Jobs</h1>
  <div v-for="job in jobs" :key="job.id">
    <h2>{{ job.title }}</h2>
  </div>
</template>

<script setup>
import { ref } from "vue";

const jobs = ref([
  {
    id: 1,
    title: "UX Designer",
    details: "lorem",
  },
  {
    id: 2,
    title: "Web Developer",
    details: "lorem",
  },
  {
    id: 3,
    title: "Tester",
    details: "lorem",
  },
]);
</script>
