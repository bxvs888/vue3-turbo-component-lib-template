# Button 按钮

基础的按钮组件。

## 基础用法

<Demo>
  <basic />
  <template #code>
    ```vue
    <<< @/examples/button/basic.vue
    ```
  </template>
</Demo>

## 圆角按钮

<Demo>
  <round-demo />
  <template #code>
    ```vue
    <<< @/examples/button/round.vue
    ```
  </template>
</Demo>

| 属性     | 参数     | 说明                             | 类型      | 默认值 |
| -------- | -------- | -------------------------------- | --------- | ------ |
| type     | 按钮类型 | 'primary' \| 'default' \| 'text' | 'default' |
| size     | 按钮大小 | 'large' \| 'default' \| 'small'  | 'default' |
| disabled | 是否禁用 | boolean                          | false     |
