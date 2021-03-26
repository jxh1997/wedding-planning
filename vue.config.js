const path = require('path');

function resolve(dir) {
  return path.join(__dirname, dir);
}
module.exports = {
  lintOnSave: true,
  chainWebpack: (config) => {
    config.resolve.alias
      .set('@', resolve('src'))
  },

  // 跨域配置
  devServer: {
    proxy: {
      '/test': {
        target: 'http://152.136.229.70:8011', 
        ws: true,  
        changeOrigin: true, 
        pathRewrite: {
          '^/test': ''
        }
      }
    }
  }
};