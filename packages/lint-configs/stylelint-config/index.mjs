export default {
  extends: [
    'stylelint-config-standard',
    'stylelint-config-recommended-vue',
    'stylelint-config-recess-order'
  ],
  overrides: [
    {
      files: ['**/*.(vue|html)'],
      customSyntax: 'postcss-html'
    }
  ],
  rules: {
    'selector-class-pattern': null,
    'no-descending-specificity': null,
    'no-invalid-double-slash-comments': null,
    'property-no-unknown': [true, { ignoreProperties: ['//'] }]
  }
};
