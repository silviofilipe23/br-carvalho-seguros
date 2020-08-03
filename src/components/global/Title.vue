<template>
  <div class="container-fluid m-0 title">
    <div class="container">
      <h1>{{title}}</h1>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TitlePages',
  props: {
    title: String
  }
}
</script>

<style lang="scss" scoped>
.title {
  background-color: var(--light);
}
.title .container {
  padding: 30px 0px;
}
</style>
