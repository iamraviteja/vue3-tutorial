<template>
  <div class="keep-alive-demo">
    <h2>Using keep-alive</h2>
    <div class="description">
      <p>
        The keep-alive component caches inactive components instead of
        destroying them. Try typing in the inputs and switching between tabs -
        the input values will be preserved.
      </p>
      <p class="tip">
        Without keep-alive, component state would be lost when switching tabs.
      </p>
    </div>

    <div class="tabs">
      <button
        @click="currentTab = 'Tab1'"
        :class="{ active: currentTab === 'Tab1' }"
      >
        Tab 1
      </button>
      <button
        @click="currentTab = 'Tab2'"
        :class="{ active: currentTab === 'Tab2' }"
      >
        Tab 2
      </button>
    </div>

    <div class="tab-content">
      <keep-alive>
        <component :is="currentComponent"></component>
      </keep-alive>
    </div>

    <div class="stats">
      <p>Current Active Tab: {{ currentTab }}</p>
      <p>Tab Switch Count: {{ switchCount }}</p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, watch, computed } from 'vue'
import Tab1 from '@/components/Tab1.vue'
import Tab2 from '@/components/Tab2.vue'

// Concept: keep-alive
// keep-alive is a built-in component in Vue that caches component instances.
// When a component is wrapped in a keep-alive tag, its state is preserved when it's toggled.
// This is useful for improving performance and maintaining component state across tab switches.

const currentTab = ref<'Tab1' | 'Tab2'>('Tab1')
const switchCount = ref<number>(0)

// Map the current tab name to the actual component
const currentComponent = computed(() => {
  return currentTab.value === 'Tab1' ? Tab1 : Tab2
})

// Track tab switches to demonstrate component reuse
watch(currentTab, () => {
  switchCount.value++
})
</script>

<style scoped>
.keep-alive-demo {
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
}

.description {
  background-color: #f8f9fa;
  padding: 15px;
  border-radius: 8px;
  margin-bottom: 20px;
}

.tip {
  color: #666;
  font-style: italic;
  margin-top: 10px;
}

.tabs {
  display: flex;
  gap: 10px;
  margin-bottom: 20px;
}

.tabs button {
  padding: 10px 20px;
  border: none;
  background-color: #e9ecef;
  border-radius: 6px;
  cursor: pointer;
  transition: all 0.3s ease;
}

.tabs button.active {
  background-color: #007bff;
  color: white;
}

.tab-content {
  background-color: white;
  border: 1px solid #dee2e6;
  border-radius: 8px;
  padding: 20px;
  min-height: 200px;
  margin-bottom: 20px;
}

.stats {
  background-color: #e9ecef;
  padding: 15px;
  border-radius: 8px;
  margin-top: 20px;
}

.stats p {
  margin: 5px 0;
  color: #495057;
}
</style>
