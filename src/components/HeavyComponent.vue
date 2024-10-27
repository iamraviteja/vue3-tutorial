<template>
  <div>
    <h3>Heavy Component</h3>
    <p>This component was loaded asynchronously.</p>
    <ul>
      <li v-for="item in items" :key="item">{{ item }}</li>
    </ul>
  </div>
</template>

<script>
export default {
  async setup() {
    // Simulate a heavy operation
    await new Promise(resolve => setTimeout(resolve, 2000))

    const items = Array.from({ length: 1000 }, (_, i) => `Item ${i + 1}`)

    return {
      items,
    }
  },
}
</script>
