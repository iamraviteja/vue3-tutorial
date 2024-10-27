<template>
  <div>
    <h2>Debouncing</h2>
    <input v-model="searchTerm" placeholder="Search..." />
    <p>Search term: {{ searchTerm }}</p>
    <p>Debounced search term: {{ debouncedSearchTerm }}</p>
  </div>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue'
import { debounce } from 'lodash-es'

// Concept: Debouncing
// Debouncing is a technique used to limit the rate at which a function gets called.
// It's particularly useful for expensive operations like API calls or complex computations.
// In this example, we debounce the search operation to avoid unnecessary updates.

const searchTerm = ref<string>('')
const debouncedSearchTerm = ref<string>('')

// The debounce function from lodash waits for 300ms of inactivity before calling the function
const debouncedSearch = debounce((val: string) => {
  debouncedSearchTerm.value = val
}, 300)

// Watch for changes in the search term and call the debounced function
watch(searchTerm, newVal => {
  debouncedSearch(newVal)
})
</script>
