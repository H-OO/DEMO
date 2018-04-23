## webpack@4.5.0

目的：构建多页应用

**文件介绍**

|- webpack.env.js // 获取当前运行环境  
|- webpack.moduleConfig.js // 模块注册  
|- webpack.venderLocal.js // 非 npm 安装的第三方包路径  
|- webpack.config.js // 配置文件，根据 moduleConfig.js 和 venderLocal.js 进行动态配置

**USE**

安装 `npm install`

启动 `npm run start`

**切换生产环境**

前往`webpack.env.js`，设置运行环境
