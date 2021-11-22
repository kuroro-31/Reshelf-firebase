module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
  },
  parserOptions: {
    parser: 'babel-eslint',
  },
  extends: [
    'eslint:recommended',
    'plugin:vue/recommended',
    'plugin:prettier/recommended',
  ],
  // *.vue ファイルを lint にかけるために必要
  plugins: ['vue'],
  // ここにカスタムルールを追加します。
  rules: {
    semi: [2, 'never'],
    'vue/html-indent': ['error', 2],
    'no-console': 'off', //console.log();OK
    'no-unused-vars': 'off', //使っていない変数あってもOK
    'vue/html-self-closing': 'off', //imgタグのようにタグが１つで完結してもOK
    'vue/max-attributes-per-line': 'off',
    'vue/no-v-html': 'off', // XSSの危険性に問題がなければ非表示
    'prettier/prettier': [
      'error',
      {
        htmlWhitespaceSensitivity: 'ignore', //aタグの羅列などで変な風にならないように追記
      },
    ],
  },
}
