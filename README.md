# vue-shop

##使用的技术
vue + vue-route + vuex + element-ui
##简介
第一次学习前端的小练习。以前没接触过前端框架，练习项目呢都是用jsp。
这次学习vue我收获很大，不过中间也走了很多弯路，浪费了很多时间...
<br>
首先这是个单页面的，全部使用组件完成。没有实质上的页面跳转，数据都是在不同组件间传递的。
<br>
利用element-ui完成各个组件的整体布局。然后写了个静态的route全部连在app.vue下（是个没用动态路由，因为没怎么懂...）
然后所有组间的数据传递都是用vuex，这样写比较方便(ps:之前不知道用这个，删删改改了好多emmm坑)。
##总结
未完成：1.走马灯的链接。2.商品的详细页。3.支付功能。4.个人信息页。
<br>这个项目吧，在本地的备份还会继续完善，发现自己还有太多东西不会，啃的也慢...伤心.jpg
## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report

# run unit tests
npm run unit

# run e2e tests
npm run e2e

# run all tests
npm test
```

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).
