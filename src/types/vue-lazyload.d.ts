declare module 'vue-lazyload' {
  import { Plugin } from 'vue'

  interface LazyloadOptions {
    preLoad?: number
    error?: string
    loading?: string
    attempt?: number
    // Add other options as needed
  }

  const VueLazyload: Plugin & {
    install(app: any, options?: LazyloadOptions): void
  }

  export default VueLazyload
}
