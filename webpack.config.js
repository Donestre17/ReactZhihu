var getConfig = require('hjs-webpack');
module.exports = getConfig({
    //入口文件
    in: 'src/app.js',
    //打包地址
    out: 'public',
    //是否删除之前的打包文件
    clearBeforeBuild: true,

    devServer: {
        proxy: {
            context: "/api",
            options: {
                target: "http://localhost:3001",
                pathRewrite: {
                    "^/api": ""
                }
            }
        }
    }
})