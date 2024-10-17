import { defineComponent, h, onMounted, ref } from 'vue'

// HOC function to log render time
export function withRenderLogger(WrappedComponent: any) {
  return defineComponent({
    name: 'WithRenderLogger',
    setup(props, { slots }) {
      const renderStart = ref<number>(performance.now())

      onMounted(() => {
        const renderEnd = performance.now()
        console.log(
          `Render time for ${WrappedComponent.name}: ${(renderEnd - renderStart.value).toFixed(2)}ms`,
        )
      })

      // Render the wrapped component
      return () => h(WrappedComponent, props, slots)
    },
  })
}
