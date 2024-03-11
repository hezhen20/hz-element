import { describe, test, expect, vi, beforeEach } from 'vitest'
import { mount } from '@vue/test-utils'
import Tooltip from './Tooltip.vue'
vi.mock('@popperjs/core')
const onVisibleChange = vi.fn()
describe('Tooltip.vue', () => {
  beforeEach(() => {
    vi.useFakeTimers()
  })
  test('basic tooltip', async () => {
    const wrapper = mount(() => 
    <div>
      <div id="outside"></div>
      <Tooltip content="hello tooltip" trigger='click' onVisibleChange={onVisibleChange}>
        <button id="trigger">Trigger</button>
      </Tooltip>
    </div>
    , {
      attachTo: document.body
    })
    // 静态测试
    const triggerArea = wrapper.find('#trigger')
    expect(triggerArea.exists()).toBeTruthy() // 触发区域wrapper是否存在
    expect(wrapper.find('.hz-tooltip__popper').exists()).toBeFalsy()  // 弹出层是否存在
    console.log('before', wrapper.html())
    // 测试点击行为
    triggerArea.trigger('click')
    await vi.runAllTimers() // 因为Tooltip点击后弹出层有延时，所以需要等timers走完
    expect(wrapper.find('.hz-tooltip__popper').exists()).toBeTruthy() // 点击之后弹出层应该存在
    expect(wrapper.get('.hz-tooltip__popper').text()).toBe('hello tooltip') // 测试节点内容
    expect(onVisibleChange).toHaveBeenCalledWith(true)
    console.log('after', wrapper.html())
    // 模拟点击区域外侧关闭的效果
    wrapper.get('#outside').trigger('click')
    await vi.runAllTimers()
    expect(wrapper.find('.hz-tooltip__popper').exists()).toBeFalsy()
    expect(onVisibleChange).toHaveBeenLastCalledWith(false)
  })
})