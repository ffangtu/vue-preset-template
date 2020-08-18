/**
 * @Description:
 * @param api {Object}
 * @param options {Object} 上层选择配置项
 * @param rootOptions {Object}
 */
module.exports = (api, options, rootOptions) => {
  let extendPackage = {
    dependencies: {
      // vuex和vue-router相关，在preset.json内若为true.则会被脚手架覆盖掉模板中的写法，暂时将依赖包的安装放于此处
      vuex: '^3.5.1',
      'vue-router': '^3.2.0'
    },
    scripts: {
      start: 'vue-cli-service server',
      dev: 'vue-cli-service server',
      test: 'vue-cli-service  command'
    }
  }
  // 选中了element ui
  if (options.modules.includes('element')) {
    extendPackage.dependencies['element-ui'] = '^2.13.2'
    console.log('处理element ui')
  }

  if (options.modules.includes('vant')) {
    extendPackage.dependencies['vant'] = '^2.10.0'
    console.log('处理vant')
  }

  if (options.modules.includes('echarts')) {
    extendPackage.dependencies['echarts'] = '^4.8.0'
    console.log('处理echarts')
  }

  // 修改 `package.json` 里的字段
  api.extendPackage(extendPackage)

  // 复制并用 ejs 渲染 `./template` 内所有的文件
  api.render('../template')
}
