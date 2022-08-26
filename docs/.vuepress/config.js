module.exports = {
  title: 'Code Monkeys',
  description:
    'Learn to Code like a Monkey by joining the Code Monkeys Community! Check out the blog for posts and videos about coding! Start Monkeying Around Today! 🐵',
  head: [
    [
      'meta',
      {
        name: 'author',
        content: 'Jay the Code Monkey',
      },
    ],
  ],
  themeConfig: {
    logo: '/images/code-monkeys-logos/code-monkeys-head-and-shoulders-logo.png',
    nav: [
      {
        text: 'Topics',
        link: '/topics/',
      },
      {
        text: 'Posts',
        items: [
          { text: 'All Posts', link: '/posts/' },
          {
            text: 'By Topic',
            items: [
              { text: 'LeetCode', link: '/topics/LeetCode/' },
              { text: 'Node.js', link: '/topics/Node.js/' },
              { text: 'VuePress', link: '/topics/VuePress/' },
            ],
          },
        ],
      },
      {
        text: 'Resources',
        link: '/resources/',
      },
      {
        text: 'Donate',
        link: '/donate/',
      },
    ],
  },
}
