<template>
  <div>
    <h2>Using Axios Interceptors</h2>
    <button @click="fetchData">Fetch Data</button>
    <p v-if="loading">Loading...</p>
    <p v-if="error">{{ error }}</p>
    <ul v-if="data.length">
      <li v-for="item in data" :key="item.id">{{ item.title }}</li>
    </ul>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import axios, { type AxiosInstance } from 'axios'

// Concept: Axios Interceptors
// Interceptors allow you to intercept requests or responses before they are handled by then or catch.
// They are useful for tasks like adding authentication tokens, logging, or handling errors globally.

interface Post {
  id: number
  title: string
}

const data = ref<Post[]>([])
const loading = ref<boolean>(false)
const error = ref<string | null>(null)

const api: AxiosInstance = axios.create({
  baseURL: 'https://jsonplaceholder.typicode.com',
})

// Request interceptor
api.interceptors.request.use(
  config => {
    loading.value = true // Set loading to true for every request
    // You could also add authentication headers here
    return config
  },
  error => {
    loading.value = false
    return Promise.reject(error)
  },
)

// Response interceptor
api.interceptors.response.use(
  response => {
    loading.value = false // Set loading to false when response is received
    return response
  },
  error => {
    loading.value = false
    // You could handle errors globally here
    return Promise.reject(error)
  },
)

const fetchData = async () => {
  try {
    const response = await api.get<Post[]>('/posts')
    data.value = response.data
  } catch (err) {
    error.value = 'An error occurred'
  }
}
</script>
