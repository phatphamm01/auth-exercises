module.exports = {
  trailingComma: 'none',
  tabWidth: 2,
  semi: true,
  singleQuote: true,
  importOrder: [
    '^[./]',
    './styles',
    '@/types',
    '@/routes',
    '@/icons|@/assets|@/design|@/layouts|@/component',
    '@/container|@/page',
    '@/redux',
    '@/hooks|@/HOC',
    '@/services',
    '@/common',
    '@/core',
    '@/provider'
  ],
  importOrderSeparation: true,
  importOrderSortSpecifiers: true
};
