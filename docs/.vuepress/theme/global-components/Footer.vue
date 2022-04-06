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
        href="https://www.youtube.com/channel/UCteut5f1PHW8vP29o66z-kg"
        target="_blank"
        rel="noopener noreferrer"
      >
        <vp-icon name="YouTube"></vp-icon>
      </a>
      <a
        href="https://discord.gg/mh9rQmwJ8H"
        target="_blank"
        rel="noopener noreferrer"
      >
        <vp-icon name="Discord"></vp-icon>
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
        href="https://www.linkedin.com/in/jason-chiarulli/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <vp-icon name="LinkedIn"></vp-icon>
      </a>
      <a
        href="https://www.patreon.com/codemonkeys?fan_landing=true"
        target="_blank"
        rel="noopener noreferrer"
      >
        <vp-icon name="Patreon"></vp-icon>
      </a>
    </div>
    <p class="made-by">Made by & for Code Monkeys 🐵</p>
  </footer>
</template>

<script>
export default {
  name: 'Footer'
};
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
  .icons > a:not(:last-child)
    margin-right: 4.6875rem
  .made-by
    margin: 0
</style>
