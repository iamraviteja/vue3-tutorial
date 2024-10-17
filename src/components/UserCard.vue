<template>
  <div class="p-4 bg-blue-100 rounded shadow">
    <h2 class="text-lg font-bold">User Card</h2>
    <p><strong>Name:</strong> {{ user.name }}</p>
    <p><strong>Email:</strong> {{ user.email }}</p>
  </div>
</template>

<script lang="ts" setup>
import { defineProps } from 'vue'

// Define props for the user data
const props = defineProps<{
  user: {
    name: string
    email: string
  }
}>()
</script>

<style scoped>
/* Minimal styles using Tailwind */
</style>
