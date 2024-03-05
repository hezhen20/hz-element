---
title: Collapse
description: Collapse 组件文档
---

# Collapse 折叠面板
通过折叠面板来显示或隐藏内容。

## 基础用法
可同时展开多个面板，面板之间相互独立，互不影响。

<preview path="../demo/Collapse/Basic.vue" title="基础用法" description="Collapse基础用法"></preview>

## 面板禁用
通过 `disabled` 属性来设置是否禁用面板。

<preview path="../demo/Collapse/Disabled.vue" title="面板禁用" description="Collapse禁用"></preview>

## 手风琴效果
每次只能展开一个面板

通过 `accordion` 属性来设置是否以手风琴模式显示。

<preview path="../demo/Collapse/Accordion.vue" title="手风琴用法" description="Collapse手风琴"></preview>

## Collapse Attributes
|Name|Description|Type|Accepted Values|Default|
|:----|:----|:----|:----|:----|
|model-value / v-model|当前激活的面板item|string (accordion mode) / array (non-accordion mode)|—|—|
|accordion|是否为手风琴效果|boolean|—|false|

## Collapse Events
|Name|Description|Parameters|
|:----|:----|:----|
|change|激活的面板改变时触发|(activeNames: array (non-accordion mode) / string (accordion mode))|

## Collapse Slots
|Name|Description|Subtags|
|:----|:----|:----|
|-|自定义默认内容|Collapse Item|

## Collapse Item Attributes
|Name|Description|Type|Accepted Values|Default|
|:----|:----|:----|:----|:----|
|name|面板的唯一标识|string/number|—|—|
|title|面板标题|string|—|—|
|disabled|面板是否禁用|boolean|—|—|

## Collapse Item Slot
|Name|Description|
|:----|:----|
|—|Collapse Item的内容|
|title|面板标题插槽|

