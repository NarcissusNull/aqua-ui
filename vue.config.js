// 在项目根目录下的 vue.config.js 文件中添加如下配置
module.exports = {
  devServer: {
    port: 8081, // 修改服务启动的端口
    proxy: {
      '/api': {
        target: 'http://localhost:8000', // 修改访问的后端地址
        // changeOrigin: true,
      }
    }
  }
};
