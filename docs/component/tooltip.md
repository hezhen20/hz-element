---
title: Tooltip
description: Tooltip 组件文档
---

# Tooltip 文字提示
常用于展示鼠标 hover 时的提示信息。

## 基础用法
使用 `content` 属性来决定 hover 时的提示信息。
<preview path="../demo/Tooltip/Basic.vue" title="基础用法" description="Tooltip基础用法"></preview>

## 不同位置​
由 `placement` 属性决定展示效果，其属性值为：`[方向]-[对齐位置]`；

方向有四个：`top, left, right, bottom`；

对齐位置有三种：`start, end, 默认为空`。
<preview path="../demo/Tooltip/Placement.vue" title="不同位置" description="Tooltip不同位置"></preview>

## 触发方式
由 `trigger` 属性决定触发方式： `hover | click`, 默认为 `hover`。
<preview path="../demo/Tooltip/Trigger.vue" title="触发方式" description="Tooltip触发方式"></preview>

## 更多内容的文字提示​
展示多行文本或设置文本内容的格式

用具名 `slot content`，替代 tooltip 中的 `content` 属性。
<preview path="../demo/Tooltip/Content.vue" title="内容插槽" description="Tooltip内容插槽"></preview>

## 手动触发​
将 `manual` 属性设置为 `true` 即可，使用实例暴露的 `show` 和 `hide` 方法来打开或关闭文字提示。
<preview path="../demo/Tooltip/Manual.vue" title="手动触发" description="Tooltip手动触发"></preview>

## API

### Attributes
|Name|Description|Type|Default|
|:----|:----|:----|:----|
|content|Tooltip的展示内容，可通过插槽`#content`修改|---|---|
|placement|Tooltip显示的位置|enum：`'top' \| 'top-start' \| 'top-end' \| 'bottom' \| 'bottom-start' \| 'bottom-end' \| 'left' \| 'left-start' \| 'left-end' \| 'right' \| 'right-start' \| 'right-end'`|`bottom`|
|popper-options|[popperjs](https://popper.js.org/docs/v2/)的参数|[popperjs](https://popper.js.org/docs/v2/)|{}|
|open-delay|Tooltip打开的延迟时间，单位毫秒|number|0|
|close-delay|Tooltip关闭的延迟时间，单位毫秒|number|200|
|trigger|Tooltip触发的方式| enum：`'click'\|'hover'` | `hover` |
|manual|是否开启手动触发模式|boolean|`false`|
|transition|动画模式|string|`fade`|

### Events
|Name|Description|
|:----|:----|
|visible-change|当 Tooltip 展示或隐藏时触发|
|click-outside|当点击到 Tooltip 外侧区域时触发|

### Slots
|Name|Description|
|:----|:----|
|default|触发 Tooltip 的元素|
|content|自定义 Tooltip 展示的内容|

### Exposes
|Name|Description|
|:----|:----|
|show|Tooltip 展开|
|hide|Tooltip 隐藏|


