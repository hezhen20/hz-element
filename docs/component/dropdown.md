---
title: Dropdown
description: Dropdown 组件文档
---

# Dropdown 下拉菜单
将操作或者菜单选项折叠到下拉菜单中。

## 基础用法
悬停在下拉菜单上以展开更多操作。
<preview path="../demo/Dropdown/Basic.vue" title="基础用法" description="Dropdown基础用法"></preview>

## 触发方式
可以配置点击激活或者悬停激活。

将 `trigger` 属性设置为 `click` 即可， 默认为 `hover`。
<preview path="../demo/Dropdown/Trigger.vue" title="触发方式" description="Dropdown触发方式"></preview>

## 支持 VNode
菜单选项支持 VNode 写法。
<preview path="../demo/Dropdown/VNode.vue" title="VNode用法" description="Dropdown VNode用法"></preview>

## 手动打开关闭
将 `manual` 属性设置为 `true` 即可， 然后可以使用实例上面的 `show` 和 `hide` 方法打开关闭下拉菜单。
<preview path="../demo/Dropdown/Manual.vue" title="手动打开关闭" description="Dropdown手动打开关闭"></preview>

## API

### Attributes
|Name|Description|Type|Default|
|:----|:----|:----|:----|
|menuOptions|菜单选项|MenuOption[]|[]|
|placement|菜单显示的位置|enum：`'top' \| 'top-start' \| 'top-end' \| 'bottom' \| 'bottom-start' \| 'bottom-end' \| 'left' \| 'left-start' \| 'left-end' \| 'right' \| 'right-start' \| 'right-end'`|`bottom`|
|popper-options|[popperjs](https://popper.js.org/docs/v2/)的参数|[popperjs](https://popper.js.org/docs/v2/)|{}|
|open-delay|下拉菜单打开的延迟时间，单位毫秒|number|0|
|close-delay|下拉菜单关闭的延迟时间，单位毫秒|number|200|
|trigger|下拉菜单触发的方式| enum：`'click'\|'hover'` | `hover` |
|manual|是否开启手动触发模式|boolean|`false`|
|transition|动画模式|string|`fade`|
|hideAfterClick|点击以后是否自动隐藏菜单|boolean|`true`|

### MenuOption
|Name|Description|Type|Default|
|:----|:----|:----|:----|
|label|菜单项展示的文字|`'string' \| 'vNode'`||
|key|菜单项的key值|`'string' \| 'number'`||
|disabled|菜单项是否禁用|`boolean`|`false`|
|divided|菜单项是否显示分隔符|`boolean`|`false`|

### Events
|Name|Description|Type|
|:----|:----|:----|
|visible-change|菜单展示/隐藏的时候触发|`boolean`|
|select|选择某一个菜单选项的时候被触发|`MenuOption`|

### Exposes
|Name|Description|
|:----|:----|
|show|下拉菜单展开|
|hide|下拉菜单隐藏|
