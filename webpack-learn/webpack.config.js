const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

// 插件
// 加载器
module.exports = {
    // // entry用于指定需要打包的入口文件
    // entry: path.join(__dirname, './src/main.js'),
    // // output用于指定输出文件的文件目录和名词
    // output: {
    //   path: path.join(__dirname, './dist'),
    //   filename: 'bundle.js'
    // }
    mode: 'development',
    // plugins用于设置webpack需要用到的所有插件
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/template.html',
            filename: 'index.html'
        })
    ],
    module: {
        rules: [{
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            },
            {
                test: /\.(jpg|png|gif|jpeg|bmp)$/,
                use: 'url-loader?limit=5000&name=[hash:8]-[name].[ext]'
                    // limit值用于设置被打包的图片是打包成base64还是url路径
                    // limit值的单位是字节 1kb = 1024字节
                    // 当被打包的图片小于limit值,会被打包成base64字符串(会减少网络请求，但是main.js体积会变大)
                    // 当被打包的图片大于等于limit值,会被打包成url路径(main.js加载速度比较快，首页响应速度回比较快，但是会增加网络请求数量)
            },
            {
                test: /\.js$/,
                use: 'babel-loader',
                exclude: /node_modules/
            }
        ]
    }
}

// webpack4.x 入口文件只用设置为src目录下面的index.js,webpack会自动进行读取,不需要单独设置配置选项
// 默认的输出文件目录是dist,输出的文件名称是main.js
// 在配置项里面加上mode属性,指定打包的模式