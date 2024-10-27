<template>
  <div>
    <h2>Using v-memo</h2>
    <div class="controls">
      <button @click="addItem">Add Item</button>
      <button @click="toggleEven">Toggle Even Numbers</button>
      <button @click="toggleHighlight">Toggle Highlighting</button>
      <button @click="sortItems">Toggle Sort</button>
      <input v-model="searchTerm" placeholder="Search items..." />
    </div>

    <div class="stats">
      <p>Total Items: {{ items.length }}</p>
      <p>Even Items: {{ items.filter(item => item.id % 2 === 0).length }}</p>
      <p>
        Highlighted Items: {{ items.filter(item => item.highlighted).length }}
      </p>
    </div>

    <ul class="items-list">
      <li
        v-for="item in filteredItems"
        :key="item.id"
        v-memo="[
          item.id,
          item.highlighted,
          showEven && item.id % 2 === 0,
          searchTerm,
        ]"
        :class="{
          item: true,
          highlighted: item.highlighted,
          even: item.id % 2 === 0 && showEven,
        }"
      >
        <span class="item-id">#{{ item.id }}</span>
        <span class="item-name">{{ item.name }}</span>
        <span class="item-status">{{
          item.id % 2 === 0 ? 'Even' : 'Odd'
        }}</span>
        <button @click="toggleItemHighlight(item.id)">
          {{ item.highlighted ? 'Unhighlight' : 'Highlight' }}
        </button>
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'

// Concept: v-memo with Complex State Management
// v-memo is used here to optimize rendering in a list with multiple dynamic features:
// - Item highlighting
// - Even/Odd filtering
// - Search functionality
// - Sorting
// The v-memo directive prevents unnecessary re-renders when unrelated state changes

interface Item {
  id: number
  name: string
  highlighted: boolean
}

const items = ref<Item[]>([
  { id: 1, name: 'Item 1', highlighted: false },
  { id: 2, name: 'Item 2', highlighted: false },
  { id: 3, name: 'Item 3', highlighted: false },
])
const showEven = ref<boolean>(true)
const searchTerm = ref<string>('')
const sortAscending = ref<boolean>(true)

// Computed property for filtered and sorted items
const filteredItems = computed(() => {
  let result = [...items.value]

  // Apply search filter
  if (searchTerm.value) {
    result = result.filter(item =>
      item.name.toLowerCase().includes(searchTerm.value.toLowerCase()),
    )
  }

  // Apply sorting
  result.sort((a, b) => {
    return sortAscending.value ? a.id - b.id : b.id - a.id
  })

  return result
})

// Actions
const addItem = () => {
  const newId = items.value.length + 1
  items.value.push({
    id: newId,
    name: `Item ${newId}`,
    highlighted: false,
  })
}

const toggleEven = () => {
  showEven.value = !showEven.value
}

const toggleHighlight = () => {
  items.value = items.value.map(item => ({
    ...item,
    highlighted: !item.highlighted,
  }))
}

const toggleItemHighlight = (id: number) => {
  const item = items.value.find(item => item.id === id)
  if (item) {
    item.highlighted = !item.highlighted
  }
}

const sortItems = () => {
  sortAscending.value = !sortAscending.value
}
</script>

<style scoped>
.controls {
  margin-bottom: 20px;
  display: flex;
  gap: 10px;
  flex-wrap: wrap;
}

.controls button {
  padding: 8px 16px;
  border-radius: 4px;
  border: 1px solid #ccc;
  background-color: #fff;
  cursor: pointer;
}

.controls input {
  padding: 8px;
  border-radius: 4px;
  border: 1px solid #ccc;
}

.stats {
  background-color: #f5f5f5;
  padding: 10px;
  border-radius: 4px;
  margin-bottom: 20px;
}

.items-list {
  list-style: none;
  padding: 0;
}

.item {
  display: flex;
  align-items: center;
  gap: 15px;
  padding: 10px;
  border: 1px solid #eee;
  margin-bottom: 5px;
  border-radius: 4px;
  transition: all 0.3s ease;
}

.item.highlighted {
  background-color: #fff3cd;
}

.item.even {
  border-left: 4px solid #28a745;
}

.item-id {
  font-weight: bold;
  min-width: 50px;
}

.item-name {
  flex-grow: 1;
}

.item-status {
  color: #666;
}

button {
  padding: 4px 8px;
  border-radius: 4px;
  border: 1px solid #ccc;
  background-color: #fff;
  cursor: pointer;
}

button:hover {
  background-color: #f0f0f0;
}
</style>
