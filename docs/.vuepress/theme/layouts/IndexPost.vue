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
    <div class="pagination">
      <div>
        <router-link v-if="$pagination.hasPrev" :to="$pagination.prevLink">
          <vp-icon name="leftArrow" class="left-arrow"></vp-icon>Prev
        </router-link>
      </div>
      <div>
        <router-link v-if="$pagination.hasNext" :to="$pagination.nextLink">
          Next<vp-icon name="rightArrow" class="right-arrow"></vp-icon>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'IndexPost',
}
</script>

<style lang="stylus" scoped>
.pagination
  display: flex
  justify-content: space-between
  padding-top: 2rem
  .left-arrow
    padding-right: 0.25rem
  .right-arrow
    padding-left: 0.25rem
</style>
