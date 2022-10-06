<template>
  <div class="theme-default-content">
    <h1>The Scribblings of a Monkey!!! 📝🐒</h1>
    <div :key="post.key" v-for="post in $pagination.pages">
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
    </div>
  </div>
</template>

<script>
export default {
  name: 'IndexPost',
}
</script>

<style></style>
