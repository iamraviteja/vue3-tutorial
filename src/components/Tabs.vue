<template>
  <div class="w-full">
    <div class="flex space-x-4 border-b">
      <slot name="tab-items" />
    </div>
    <div class="mt-4">
      <slot name="tab-panels" />
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref, provide } from 'vue'

// Manage the active tab state
const activeTab = ref(0)
const setActiveTab = (index: number) => (activeTab.value = index)

// Provide the active tab state and the setter function to child components
provide('activeTab', activeTab)
provide('setActiveTab', setActiveTab)
</script>

<style scoped>
/* Styling using Tailwind CSS */
</style>
