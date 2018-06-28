<template>
  <div class="text-center-vertical-2 card">
    <div class="item">
      <span>Lorem ipsum dolor sit amet.</span>
    </div>
  </div>
</template>

<style lang="stylus" scoped>
  .text-center-vertical-2 {
    @extend $shadow;
    height: 5vw;
    .item {
      height: 100%; // table-cell 下 height: 100%; 不生效！
      vertical-align: middle;
      span {
        vertical-align: middle;
      }
    }
  }
</style>
