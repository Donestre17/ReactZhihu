# ReactZhihu
使用知乎api写的一个react项目

1. 开始  
    1. ` npm install ` 安装依赖
    2. ` node server.js ` 启动后台
    3. ` npm run start ` 打开项目，运行在` localhost:3000 `上
2. 项目简介  
    1. 使用了[知乎日报的api](https://github.com/izzyleung/ZhihuDailyPurify/wiki/%E7%9F%A5%E4%B9%8E%E6%97%A5%E6%8A%A5-API-%E5%88%86%E6%9E%90) 获取实时数据
    2. 使用react作为前端框架，react-router完成前端路由跳转，由于数据结构并不复杂，没有使用redux
    3. 用 express 实现了简单的后台，解决跨域问题
    4. 项目中使用 sessionStorage 解决页面跳转的缓存问题，使用 localStorage 存放收藏栏目
    5. 关于知乎图片盗链问题的解决，在` <head></head> `中放入 ` <meta name="referrer" content="never"> `，[详情请看](http://www.cnblogs.com/dongcanliang/p/6655061.html)

3. 项目总结：  
    总体来说并不是一个很难的项目，得益于react以及commonjs，使每个页面以及组件都十分的清晰，降低了很多的开发难度。对于我个人熟悉react的开发流程有很大的帮助。目前的版本也只是把需要的功能都实现了，后期很多地方还能做优化，比如动画，比如代码简化，任重而道远。
