module.exports = {
  pages: {
    index: {
      // 入口文件
      entry: 'src/main.js',
      // 模版来源
      template: 'public/index.html',
      // 在 dist/index.html 输出
      filename: 'index.html'
    }
  },
  chainWebpack: config => {
    config.module
    .rule('js')
    .include.add(/packages/)
    .end()
    .include.add(/src/)
    .end()
    .use('babel')
    .loader('babel-loader')
    .tap(options => {
      // 修改选项
      return options;
    })
  }
}