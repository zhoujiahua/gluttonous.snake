const path = require("path");
const HTMLWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

// webpack中的所有的配置
module.exports = {
  // 指定入口文件
  // entry: "./src/app.ts",
  entry: {
    app: "./src/app.ts",
    print: "./src/print.ts",
    client: "./src/client.ts",
    server: "./src/server.ts",
  },
  // 指定打包文件所在目录
  output: {
    // 指定打包文件的目录
    path: path.resolve(__dirname, "dist"),
    // 静态资源配置
    publicPath: "/",
    // 打包后文件的文件
    // filename: "bundle.js",
    filename: "[name].bundle.js",

    // 告诉webpack不使用箭头
    environment: {
      arrowFunction: false,
      const: false,
    },
  },

  // 启动本地服务配置
  devServer: {
    port: 3000,
    static: {
      directory: path.join(__dirname, "/"),
    },
  },

  // 指定webpack打包时要使用模块
  module: {
    // 指定要加载的规则
    rules: [
      {
        // test指定的是规则生效的文件
        test: /\.ts$/,
        // 要使用的loader
        use: [
          // 配置babel
          {
            // 指定加载器
            loader: "babel-loader",
            // 设置babel
            options: {
              // 设置预定义的环境
              presets: [
                [
                  // 指定环境的插件
                  "@babel/preset-env",
                  // 配置信息
                  {
                    // 要兼容的目标浏览器
                    targets: {
                      chrome: "58",
                      ie: "11",
                    },
                    // 指定corejs的版本
                    corejs: "3",
                    // 使用corejs的方式 "usage" 表示按需加载
                    useBuiltIns: "usage",
                  },
                ],
              ],
            },
          },
          "ts-loader",
        ],
        // 要排除的文件
        exclude: /node-modules/,
      },

      {
        test: /\.m?js$/,
        include: [
          // 设置包含的文件后 编译时 babel-loader 只用于编译包含内的文件
          path.resolve(__dirname, "./src"),
          // path.resolve(__dirname,'./node_modules/@vendor/your-module')
        ],
        loader: "babel-loader", //默认支持 es7
      },

      // 加载less文件和css文件
      {
        test: /\.(less|css)$/,
        use: [
          "style-loader",
          "css-loader",

          // 引入postcss
          {
            loader: "postcss-loader",
            options: {
              postcssOptions: {
                plugins: [
                  [
                    "postcss-preset-env",
                    {
                      browsers: "last 2 versions",
                    },
                  ],
                ],
              },
            },
          },
          "less-loader",
        ],
      },

      // 加载图片
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: ["file-loader"],
      },

      // 加载字体
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        use: ["file-loader"],
      },
    ],
  },

  // 配置Webpack插件
  plugins: [
    new CleanWebpackPlugin(),
    new HTMLWebpackPlugin({
      title: "Gluttonous Snake",
      template: "./src/assets/index.html",
    }),
  ],

  // 用来设置引用模块
  resolve: {
    modules: [
      path.resolve(__dirname, "node_modules"), // 指定当前目录下的 node_modules 优先查找
      // 'node_modules', // 如果有一些类库是放在一些奇怪的地方的，你可以添加自定义的路径或者目录
    ],
    alias: {
      "@": path.resolve(__dirname, "src"),
    },
    extensions: [".js", ".ts", ".tsx", ".jsx", ".json"],
  },
};
