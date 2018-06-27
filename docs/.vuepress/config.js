const path = require('path')
const fs = require('fs')

const sidebars = [
  { title: 'Front-end', dirname: 'front-end' },
  { title: 'Node.js', dirname: 'node' },
  { title: 'Back-end', dirname: 'front-end' },
  { title: 'Design', dirname: 'design' },
  { title: 'Languages', dirname: 'languages' },
  { title: 'Articles', dirname: 'articles' },
]

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
    sidebar: sidebars.map(({ title, dirname }) => {
      const dirpath = path.resolve(__dirname, '../' + dirname)
      return {
        title,
        collapsable: false,
        children: fs
          .readdirSync(dirpath)
          .filter(item => item.endsWith('.md') && fs.statSync(path.join(dirpath, item)).isFile())
          .map(item => dirname + '/' + item.replace(/.md$/, ''))
      }
    })
  }
}
