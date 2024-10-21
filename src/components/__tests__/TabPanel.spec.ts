import { mount } from '@vue/test-utils'
import TabPanel from '@/components/TabPanel.vue'
import { describe, it, expect } from 'vitest'
import { h, defineComponent, ref } from 'vue'

// Mock parent wrapper providing the required context
const MockProvider = defineComponent({
  setup(_, { slots }) {
    const activeTab = ref(1) // Set active tab to 1
    return () => h('div', { provide: { activeTab } }, slots.default?.())
  },
})

describe('TabPanel.vue', () => {
  it('displays content only when the corresponding tab is active', () => {
    const wrapper = mount(MockProvider, {
      slots: {
        default: () => h(TabPanel, { index: 1 }, 'Content for Tab 1'),
      },
    })

    expect(wrapper.text()).toBe('Content for Tab 1')
  })

  it('hides content when the tab is not active', () => {
    const wrapper = mount(MockProvider, {
      slots: {
        default: () => h(TabPanel, { index: 0 }, 'Content for Tab 1'),
      },
    })

    expect(wrapper.text()).toBe('')
  })
})
