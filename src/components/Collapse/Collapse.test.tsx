import { describe, test, expect, vi, beforeAll } from 'vitest'
import { mount } from '@vue/test-utils'
import type { VueWrapper, DOMWrapper } from '@vue/test-utils'
import Collapse from './Collapse.vue'
import CollapseItem from './CollapseItem.vue'
const onChange = vi.fn()  // 创建回调函数
let wrapper: VueWrapper
let headers: DOMWrapper<Element>[], contents: DOMWrapper<Element>[]
let firstContent: DOMWrapper<Element>, secondContent: DOMWrapper<Element>, disabledContent: DOMWrapper<Element>,
  firstHeader: DOMWrapper<Element>, secondHeader: DOMWrapper<Element>, disabledHeader: DOMWrapper<Element>

describe('Collapse.vue', () => {
  // 在所有案例运行前运行一次，创建实例
  beforeAll(() => {
    // 与 Button.test.ts 不同，这里 mount的第一个参数不是组件，而是一个函数，返回 jsx
    wrapper = mount(() => 
      <Collapse modelValue={['a']} onChange={onChange}>
        <CollapseItem name="a" title="title a">
          content a
        </CollapseItem>
        <CollapseItem name="b" title="title b">
          content b
        </CollapseItem>
        <CollapseItem name="c" title="title c" disabled>
          content c
        </CollapseItem>
      </Collapse>
    , {
      global: {
        stubs: ['Icon']
      },
      attachTo: document.body
    })
    headers = wrapper.findAll('.hz-collapse-item__header')
    contents = wrapper.findAll('.hz-collapse-item__wrapper')
    firstHeader = headers[0]
    secondHeader = headers[1]
    disabledHeader = headers[2]
    firstContent = contents[0]
    secondContent = contents[1]
    disabledContent = contents[2]
  })
  test('测试基础结构以及对应文本', () => {
    // 测试长度
    expect(headers.length).toBe(3)
    expect(contents.length).toBe(3)
    // 测试文本
    expect(firstHeader.text()).toBe('title a')
    // 测试内容
    // isVisible 来测试 v-show 
    expect(firstContent.isVisible()).toBeTruthy()
    expect(secondContent.isVisible()).toBeFalsy()
    expect(firstContent.text()).toBe('content a')   

  })
  // 点击 header 关闭 item 是异步的过程，要加 async，等待 DOM 节点更新
  test('点击标题展开/关闭内容', async () => {
    // 测试事件
    await firstHeader.trigger('click')
    expect(firstContent.isVisible()).toBeFalsy()
    await secondHeader.trigger('click')
    expect(secondContent.isVisible()).toBeTruthy()
  })
  // 测试 自定义事件
  test('发送正确的事件', () => {
    expect(onChange).toHaveBeenCalledTimes(2)
    expect(onChange).toHaveBeenCalledWith([])
    expect(onChange).toHaveBeenLastCalledWith(['b'])
  })
  test('disabled 的内容应该没有反应', async () => {
    onChange.mockClear()
    // disabled 效果就是一个特殊的 class，判断有没有这个 class
    expect(disabledHeader.classes()).toContain('is-disabled')
    await disabledHeader.trigger('click')
    expect(disabledContent.isVisible()).toBeFalsy()
    expect(onChange).not.toHaveBeenCalled()
  })
})