<template>
  <div>
    <h2>Loading Components Asynchronously</h2>
    <button @click="showHeavyComponent = !showHeavyComponent">
      {{ showHeavyComponent ? 'Hide' : 'Show' }} Heavy Component
    </button>
    <Suspense v-if="showHeavyComponent">
      <template #default>
        <HeavyComponent />
      </template>
      <template #fallback>
        <p>Loading heavy component...</p>
      </template>
    </Suspense>
  </div>
</template>

<script setup lang="ts">
import { ref, defineAsyncComponent } from 'vue'

// Concept: Async Components and Suspense
// Async components allow you to load components on-demand, which can improve initial load time.
// Suspense is a built-in component in Vue 3 that allows you to handle async dependencies in your component tree.
const HeavyComponent = defineAsyncComponent(
  () => import('@/components/HeavyComponent.vue'),
)

const showHeavyComponent = ref<boolean>(false)

// The HeavyComponent will only be loaded when it's needed (when showHeavyComponent is true)
// Suspense provides a loading state (fallback slot) while the async component is being loaded
</script>
