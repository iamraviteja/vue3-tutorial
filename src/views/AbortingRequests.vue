<template>
  <div>
    <h2>Aborting Requests</h2>
    <button @click="fetchData">Fetch Data</button>
    <button @click="abortRequest">Abort Request</button>
    <p v-if="loading">Loading...</p>
    <p v-if="error">{{ error }}</p>
    <ul v-if="data.length">
      <li v-for="item in data" :key="item.id">{{ item.title }}</li>
    </ul>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import axios from 'axios'

// Concept: Aborting Requests
// Sometimes, we need to cancel ongoing HTTP requests, for example, when a user navigates away from a page.
// The AbortController API allows us to abort fetch requests, and many libraries like Axios support it as well.

interface Post {
  id: number
  title: string
}

const data = ref<Post[]>([])
const loading = ref<boolean>(false)
const error = ref<string | null>(null)
let controller: AbortController | null = null

const fetchData = async () => {
  loading.value = true
  error.value = null
  controller = new AbortController()

  try {
    const response = await axios.get<Post[]>(
      'https://jsonplaceholder.typicode.com/posts',
      {
        signal: controller.signal, // Pass the AbortController's signal to the request
      },
    )
    data.value = response.data
  } catch (err) {
    if (axios.isCancel(err)) {
      error.value = 'Request aborted'
    } else {
      error.value = 'An error occurred'
    }
  } finally {
    loading.value = false
  }
}

const abortRequest = () => {
  if (controller) {
    controller.abort() // This will trigger the catch block in fetchData
  }
}
</script>
