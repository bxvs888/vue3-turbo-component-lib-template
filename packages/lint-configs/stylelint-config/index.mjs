export default {
  extends: [
    'stylelint-config-standard',
    'stylelint-config-recommended-vue',
    'stylelint-config-recess-order',
    'stylelint-config-standard-scss'
  ],
  overrides: [
    {
      files: ['**/*.(scss|css|vue|html)'],
      customSyntax: 'postcss-scss'
    },
    {
      files: ['**/*.(vue|html)'],
      customSyntax: 'postcss-html'
    }
  ],
  rules: {
    // 基础规则
    'selector-class-pattern': null,
    'no-descending-specificity': null,
    'no-invalid-double-slash-comments': null,

    // SCSS 特定规则
    'at-rule-no-unknown': null,
    'scss/at-rule-no-unknown': true,
    'function-no-unknown': null,
    'scss/function-no-unknown': [
      true,
      {
        ignoreFunctions: ['mix', 'lighten', 'darken', 'rgba']
      }
    ],
    // 关闭 SCSS 全局函数名称检查
    'scss/no-global-function-names': null,

    // 其他规则
    'property-no-unknown': [
      true,
      {
        ignoreProperties: ['//'],
        ignoreSelectors: [':export', ':import']
      }
    ],
    'no-empty-source': null,
    'unit-no-unknown': [
      true,
      {
        ignoreUnits: ['rpx']
      }
    ]
  }
};
