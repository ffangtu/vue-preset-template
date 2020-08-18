/**
 * @Description:
 * @param pkg {JSON} package.json
 * @returns {JSON}
*/
module.exports = pkg => {
  return [
    {
      type: 'checkbox',
      name: 'modules',
      message: '请选择相关依赖包',
      choices: [
        {title: 'element ui', value: 'element'},
        {title: 'vant', value: 'vant'},
        {title: 'echarts', value: 'echarts'}
      ]
    }
  ]
}
