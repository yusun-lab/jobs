<template>
  <h1>Job Details Page</h1>
  <p>The job id is {{ id }}</p>
  <!-- <p>The job id is {{ $route.params.slug }}</p> -->
</template>

<script setup lang="ts">
const { id } = defineProps({
  id: {
    type: String,
    required: true,
  },
});
</script>

<style>
.job h2 {
  background: #f4f4f4;
  padding: 20px;
  border-radius: 10px;
  margin: 10px auto;
  max-width: 600px;
  cursor: pointer;
  color: #444;
}

.job h2:hover {
  background: #ddd;
}

.job a {
  text-decoration: none;
}
</style>
