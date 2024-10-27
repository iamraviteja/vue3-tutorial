<template>
  <div>
    <h2>Loading Environment Variables</h2>
    <p>API URL: {{ apiUrl }}</p>
    <p>App Version: {{ appVersion }}</p>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

// Concept: Loading Environment Variables
// In Vite, we can access environment variables using import.meta.env
// These variables are typically defined in a .env file in the project root
// Variables prefixed with VITE_ are exposed to the client-side code

const apiUrl = ref<string>(import.meta.env.VITE_API_URL)
const appVersion = ref<string>(import.meta.env.VITE_APP_VERSION)
</script>
