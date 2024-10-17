<template>
  <div v-if="isActive">
    <slot />
  </div>
</template>

<script lang="ts" setup>
import { inject, defineProps, computed } from 'vue'

// Receive props for the panel index
const props = defineProps<{ index: number }>()

// Inject the active tab state
const activeTab = inject('activeTab') as Ref<number>

// Check if this panel is active
const isActive = computed(() => activeTab.value === props.index)
</script>

<style scoped>
/* Optional: Minimal Tailwind styling */
</style>
