/** @type {import("stylelint").Config} */
module.exports = {
  extends: ['stylelint-config-standard-scss', 'stylelint-config-clean-order'],
  rules: {
    'max-nesting-depth': 3,
    'color-hex-length': 'short',
    'scss/dollar-variable-pattern': '^[_a-z0-9-]+$',
    'scss/percent-placeholder-pattern': '^[_a-z0-9-]+$',
    'selector-class-pattern': '^[a-z0-9\\-]+$'
  }
};
