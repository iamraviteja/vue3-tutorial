<template>
  <div class="tab-component">
    <h3>Tab 2</h3>
    <div class="form-group">
      <label>Enter some text (will be preserved):</label>
      <input v-model="inputValue" placeholder="Type something..." />
      <p class="input-value">Current value: {{ inputValue }}</p>
    </div>
    <div class="timestamp">
      <p>Component created at: {{ createdTime }}</p>
      <p>Last activated at: {{ lastActivated }}</p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onActivated } from 'vue'

const inputValue = ref('')
const createdTime = ref(new Date().toLocaleTimeString())
const lastActivated = ref('Not activated yet')

onActivated(() => {
  lastActivated.value = new Date().toLocaleTimeString()
})
</script>

<style scoped>
.tab-component {
  display: flex;
  flex-direction: column;
  gap: 15px;
}

.form-group {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

input {
  padding: 8px;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 16px;
}

.input-value {
  color: #666;
  font-size: 0.9em;
}

.timestamp {
  margin-top: 20px;
  padding: 10px;
  background-color: #f8f9fa;
  border-radius: 4px;
}

.timestamp p {
  margin: 5px 0;
  font-size: 0.9em;
  color: #666;
}
</style>
