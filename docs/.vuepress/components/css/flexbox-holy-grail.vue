<template>
  <div class="wrapper card">
    <header class="hg-header"> Header </header>
    <div class="hg-container">
      <main class="hg-content">Content</main>
      <nav class="hg-nav">Nav</nav>
      <aside class="hg-aside">Aside</aside>
    </div>
    <footer class="hg-footer"> Footer </footer>
  </div>
</template>

<style lang="stylus" scoped>
  .wrapper {
    display: flex;
    flex-direction: column;
    @extend $shadow;
    .hg-header, .hg-footer {
      text-align: center;
      height: 30px;
      line-height: 30px;
      color: $gray;
      background-color: $light;
    }
    .hg-container {
      display: flex;
      .hg-content, .hg-nav, .hg-aside {
        line-height: 100px;
        text-align: center;
        color: white;
      }
      .hg-nav, .hg-aside {
        flex: 0 0 100px;
        background-color $red;
        height: 100px;
      }
      .hg-content {
        flex: 1;
        background-color $green;
        height: 100px;
      }

      .hg-nav {
        order: -1;
      }
    }
  }
</style>
