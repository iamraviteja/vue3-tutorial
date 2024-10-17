<template>
  <button
    :class="{
      'border-b-2 border-blue-500 text-blue-600': isActive,
      'text-gray-500': !isActive,
    }"
    class="px-4 py-2 font-medium"
    @click="setActiveTab(index)"
  >
    <slot />
  </button>
</template>

<script lang="ts" setup>
import { inject, defineProps, computed } from 'vue'

// Receive props for the tab index
const props = defineProps<{ index: number }>()

// Inject active tab state and setter function
const activeTab = inject('activeTab') as Ref<number>
const setActiveTab = inject('setActiveTab') as (index: number) => void

// Determine if this tab is active
const isActive = computed(() => activeTab.value === props.index)
</script>

<style scoped>
/* Optional: Additional Tailwind styles */
</style>
