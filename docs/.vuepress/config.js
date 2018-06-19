module.exports = {
  base: '/awesome-front-end/',
  dest: 'dist',
  title: 'Awesome Front-end',
  description: 'A continuous updating list that a awesome FED is most likely to "fetch".',
  head: [
    ['meta', { name: 'theme-color', content: '#3eaf7c' }],
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }]
  ],
  serviceWorker: true,
  themeConfig: {
    repo: 'ulivz/awesome-front-end',
    editLinks: true,
    docsDir: 'docs',
    editLinkText: '在 GitHub 上编辑此页',
    lastUpdated: '上次更新',
    sidebar: [
      {
        title: 'Front-end',
        collapsable: false,
        children: [
          'front-end/javascript',
          'front-end/css',
          'front-end/vue',
          'front-end/react',
          'front-end/babel',
          'front-end/compilers',
          'front-end/data-visualization',
          'front-end/desktop',
          'front-end/frameworks',
          'front-end/mobile',
          'front-end/reactive-programming',
          'front-end/state-management',
          'front-end/markdown',
          'front-end/static-sites',
          'front-end/typescript'
        ]
      },
      {
        title: 'Node.js',
        collapsable: false,
        children: [
          'node/build',
          'node/gulp',
          'node/http',
          'node/nodejs',
          'node/security',
          'node/sql',
          'node/webpack'
        ]
      },
      {
        title: 'Design',
        collapsable: false,
        children: [
          'design/vision',
        ]
      },
      {
        title: 'Languages',
        collapsable: false,
        children: [
          'languages/cpp',
          'languages/haskell',
          'languages/java',
        ]
      },
      {
        title: 'Articles',
        collapsable: false,
        children: [
          ['articles/articles-en_US', 'English'],
          ['articles/articles-zh_CN', '中文'],
          'articles/book'
        ]
      }
    ]
  }
}
