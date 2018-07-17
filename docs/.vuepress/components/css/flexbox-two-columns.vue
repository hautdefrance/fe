<template>
  <div class="flexbox-two-columns">
    <div class="two-columns-sidebar col">Sidebar</div>
    <div class="two-columns-content col">Content</div>
  </div>
</template>

<style lang="stylus" scoped>
  .flexbox-two-columns {
    display: flex;
    width: 100%;
    .col {
      height: 100px;
      line-height: 100px;
      color: white;
      text-align: center;
    }
    .two-columns-sidebar {
      flex: 0 0 100px;
      background-color $red;
    }
    .two-columns-content {
      flex: 1;
      background-color: $green;
    }
  }
</style>
