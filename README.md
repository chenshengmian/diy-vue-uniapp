# AS-Editor

## 介绍

基于 vue2.x 可视化拖拽编辑，页面生成工具。提升前端开发效率，可集成至移动端项目作为通过定义 JSON 直接生成 UI 界面。


### 安装教程

1. npm install （安装 node_modules 模块）
2. npm run serve （运行）
3. npm run build （打包）
4. npm update (用于更新包到基于规范范围的最新版本)

> 注：在新版本的npm中，默认情况下，npm install遇到冲突的peerDependencies时将失败。
> 可使用：npm install --legacy-peer-deps



##### 自定义组件可以看

```text
src / layout / home / index.vue                 // 编辑页面文件
src / components / sliderassembly / index.vue   // 左侧组件大全文件
src / components / componentscom                // 左侧组件目录
src / components / rightslider                  // 右侧组件目录
src / utils / componentProperties.js            // 组件数据
```

#### componentProperties（组件数据）字段注解

```js
{
  component: 'custommodule',    // 中间部分手机组件的name
  text: '自定义模块',            // 组件文字描述
  type: '1-14',                 // data-tpye
  active: true,                 // 是否选中
  style: 'custommodulestyle',   // 右边组件设置的name
  setStyle: {}                  // 组件动态数据
}
```




#### 参与贡献

1. Fork 本仓库
2. 新建 Feat_xxx 分支
3. 提交代码
4. 新建 Pull Request

#### 结尾

##### 如果喜欢的话给个 star 一下哈

