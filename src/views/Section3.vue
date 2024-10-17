<template>
  <div class="max-w-2xl mx-auto px-4 py-8">
    <h1 class="text-3xl font-bold text-gray-900 mb-2">
      Benefits of the Compound Component Pattern
    </h1>
    <p class="text-base text-gray-600 leading-relaxed mb-6">
      State Sharing: The Tabs component manages the state and provides it to
      child components via provide/inject.<br />
      Separation of Concerns: Each component handles its own responsibility
      (e.g., TabItem handles clicks, TabPanel renders content).<br />
      Flexibility: You can add more TabItem and TabPanel components dynamically
      without changing the parent logic.<br />
      Composition: The parent and child components work together seamlessly,
      making the UI easy to maintain and extend.<br />
    </p>
  </div>
  <div class="max-w-lg mx-auto mt-10">
    <Tabs>
      <!-- Define Tab Items -->
      <template #tab-items>
        <TabItem :index="0">Tab 1</TabItem>
        <TabItem :index="1">Tab 2</TabItem>
        <TabItem :index="2">Tab 3</TabItem>
      </template>

      <!-- Define Tab Panels -->
      <template #tab-panels>
        <TabPanel :index="0">Content for Tab 1</TabPanel>
        <TabPanel :index="1">Content for Tab 2</TabPanel>
        <TabPanel :index="2">Content for Tab 3</TabPanel>
      </template>
    </Tabs>
  </div>
</template>

<script lang="ts" setup>
import Tabs from '@/components/Tabs.vue'
import TabItem from '@/components/TabItem.vue'
import TabPanel from '@/components/TabPanel.vue'
</script>

<style scoped>
/* Optional: Tailwind styles */
</style>
