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
