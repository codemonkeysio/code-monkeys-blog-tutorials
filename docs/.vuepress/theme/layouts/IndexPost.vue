<template>
  <div class="theme-default-content">
    <h1>The Scribblings of a Monkey!!!</h1>
    <div v-for="post in $pagination.pages" :key="post.key">
      <div>
        <div>
          <h2>
            {{ post.title }}
          </h2>
        </div>
        <p>
          {{ post.frontmatter.preview }}
        </p>
      </div>
      <div>
        <img
          :src="`/images/${post.frontmatter.img}`"
          :alt="post.frontmatter.alt || 'Post Picture'"
        />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'IndexPost',
}
</script>

<style></style>
