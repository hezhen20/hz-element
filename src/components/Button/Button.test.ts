import { describe, test, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import Button from './Button.vue'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import Icon from '../Icon/Icon.vue'

describe('Button.vue', () => {
  test('basic button', () => {
    // 模拟button的挂载
    const wrapper = mount(Button, {
      props: {
        type: 'primary'
      },
      slots: {
        default: 'button'
      }
    })
    // 打印出html
    console.log(wrapper.html());
    // 测试 class 是否包含对应的类名
    expect(wrapper.classes()).toContain('hz-button--primary')
    // slot
    // get, find 来遍历 wrapper
    // slot 内容是否为 button
    expect(wrapper.get('button').text()).toBe('button')
    // events 测试事件
    wrapper.get('button').trigger('click')  // trigger 触发事件
    console.log(wrapper.emitted())
    expect(wrapper.emitted()).toHaveProperty('click')
  })
  test('icon', () => {
    const wrapper = mount(Button, {
      props: {
        icon: 'arrow-up'
      },
      slots: {
        default: 'icon'
      },
      // stubs 中存放想要模拟的组件的名称，测试的时候只需要判断组件存不存在即可，不需要真的引入
      global: {
        stubs: ['FontAwesomeIcon']
      }
    })
    const iconElement = wrapper.findComponent(FontAwesomeIcon)
    // 判断组件是否存在
    expect(iconElement.exists()).toBeTruthy()
    // 判断组件属性是否正确
    expect(iconElement.attributes('icon')).toBe('arrow-up')
  })
  test('loading', () => {
    const wrapper = mount(Button, {
      props: {
        loading: true
      },
      slots: {
        default: 'loading'
      },
      global: {
        stubs: ['Icon']
      }
    })
    console.log(wrapper.html())
    const iconElement = wrapper.findComponent(Icon)
    expect(iconElement.exists()).toBeTruthy()
    expect(iconElement.attributes('icon')).toBe('spinner')
    expect(wrapper.attributes('disabled')).toBeDefined()
  })
})