import { mount } from '@vue/test-utils'
import Tabs from '@/components/Tabs.vue'
import TabItem from '@/components/TabItem.vue'
import TabPanel from '@/components/TabPanel.vue'
import { describe, it, expect } from 'vitest'

describe('Tabs.vue', () => {
  it('renders TabItems and TabPanels correctly', () => {
    const wrapper = mount(Tabs, {
      slots: {
        'tab-items': `<TabItem index="0">Tab 1</TabItem>
                      <TabItem index="1">Tab 2</TabItem>`,
        'tab-panels': `<TabPanel index="0">Content 1</TabPanel>
                       <TabPanel index="1">Content 2</TabPanel>`,
      },
      global: {
        components: { TabItem, TabPanel },
      },
    })

    expect(wrapper.findAllComponents(TabItem).length).toBe(2)
    expect(wrapper.findAllComponents(TabPanel).length).toBe(2)
  })

  it('updates the active tab correctly on click', async () => {
    const wrapper = mount(Tabs, {
      slots: {
        'tab-items': `<TabItem index="0">Tab 1</TabItem>
                      <TabItem index="1">Tab 2</TabItem>`,
        'tab-panels': `<TabPanel index="0">Content 1</TabPanel>
                       <TabPanel index="1">Content 2</TabPanel>`,
      },
      global: {
        components: { TabItem, TabPanel },
      },
    })

    const secondTab = wrapper.findAllComponents(TabItem)[1]
    await secondTab.trigger('click')

    const panels = wrapper.findAllComponents(TabPanel)
    expect(panels[1].isVisible()).toBe(true)
    expect(panels[0].isVisible()).toBe(false)
  })
})
