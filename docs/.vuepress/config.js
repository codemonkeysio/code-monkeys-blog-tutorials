module.exports = {
  title: 'Code Monkeys',
  description:
    'Learn to Code like a Monkey by joining the Code Monkeys Community!!! We create videos, tutorials, blog posts, etc. to help others learn about code and other tech related topics! Start Monkeying Around Today!!! 🐵',
  head: [
    [
      'meta',
      {
        name: 'author',
        content: 'Jay the Code Monkey'
      }
    ]
  ],
  themeConfig: {
    logo: '/images/code-monkeys-logos/face.png',
    nav: [
      {
        text: 'Topics',
        link: '/topics/'
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
              { text: 'VuePress', link: '/topics/VuePress/' }
            ]
          }
        ]
      },
      {
        text: 'Resources',
        link: '/resources/'
      },
      {
        text: 'Donate',
        link: '/donate/'
      }
    ]
  }
};
