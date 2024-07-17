<template>
  <footer class="footer">
    <div class="icons">
      <a
        href="https://github.com/codemonkeysio"
        target="_blank"
        rel="noopener noreferrer"
      >
        <vp-icon name="GitHub"></vp-icon>
      </a>
      <a
        href="https://www.youtube.com/@codemonkeystech"
        target="_blank"
        rel="noopener noreferrer"
      >
        <vp-icon name="YouTube"></vp-icon>
      </a>
      <a
        href="https://gab.com/codemonkeys"
        target="_blank"
        rel="noopener noreferrer"
      >
        <vp-icon name="Gab"></vp-icon>
      </a>
      <a
        href="https://t.me/codemonkeystech"
        target="_blank"
        rel="noopener noreferrer"
      >
        <vp-icon name="Telegram"></vp-icon>
      </a>
      <a
        href="https://twitter.com/codemonkeystech"
        target="_blank"
        rel="noopener noreferrer"
      >
        <vp-icon name="Twitter"></vp-icon>
      </a>
      <a
        href="https://codemonkeys.tech/rss.xml"
        target="_blank"
        rel="noopener noreferrer"
      >
        <vp-icon name="RSS"></vp-icon>
      </a>
      <a
        href="https://keybase.io/codemonkeystech"
        target="_blank"
        rel="noopener noreferrer"
      >
        <vp-icon name="Keybase"></vp-icon>
      </a>
    </div>
    <p class="made-by">Made by & for Code Monkeys 🐵</p>
  </footer>
</template>

<script>
export default {
  name: 'Footer',
}
</script>

<style lang="stylus" scoped>
.footer
  display: flex
  flex-direction: column
  align-items: center
  padding: 2.5rem 2.5rem 2rem
  .icons
    display: flex
    margin-bottom: 1.75rem
    font-size: 2rem
    svg
      fill: $textColor
    svg:hover
      fill: $accentColor
  .icons > a:not(:last-child)
    margin-right: 4.6875rem
  .made-by
    margin: 0
</style>
