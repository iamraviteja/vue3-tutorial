<template>
  <div>
    <h2>Lazy Loading Images</h2>
    <div v-for="image in images" :key="image.id" class="image-container">
      <img v-lazy="image.url" :alt="image.title" width="300" height="200" />
      <p>{{ image.title }}</p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import VueLazyload from 'vue-lazyload'
import { createApp } from 'vue'

interface Image {
  id: number
  title: string
  url: string
}

const images = ref<Image[]>([])

onMounted(async () => {
  const app = createApp({})
  app.use(VueLazyload, {
    preLoad: 1.3,
    error: 'https://via.placeholder.com/300x200?text=Error',
    loading: 'https://via.placeholder.com/300x200?text=Loading',
    attempt: 1,
  })

  const response = await fetch(
    'https://jsonplaceholder.typicode.com/photos?_limit=20',
  )
  images.value = await response.json()
})
</script>

<style scoped>
.image-container {
  margin-bottom: 20px;
}
</style>
