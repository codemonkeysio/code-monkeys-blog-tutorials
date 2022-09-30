<template></template>

<script>
export default {
  created() {
    console.log('$pagination.pages', this.$pagination.pages)

    console.log('$pagination.length', this.$pagination.length)

    console.log('$pagination.hasPrev', this.$pagination.hasPrev)
    console.log('$pagination.prevLink', this.$pagination.prevLink)

    console.log('$pagination.hasNext', this.$pagination.hasNext)
    console.log('$pagination.nextLink', this.$pagination.nextLink)

    console.log(
      '$pagination.getSpecificPageLink(0)',
      this.$pagination.getSpecificPageLink(0)
    )
  },
}
</script>

<style></style>
