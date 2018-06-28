<template>
  <div class="text-center-vertical-1 wrapper">
    <div class="item item1 card">
      Lorem ipsum (方案1).
    </div>
    <div class="item item2 card">
      <span>Lorem ipsum (方案2).</span>
    </div>
  </div>
</template>

<style lang="stylus" scoped>
  .wrapper {
    text-align: center;
    display: flex;
    .item {
      @extend $shadow;
      flex: 1;
      width: 40%;
      margin-right: 10px;
      vertical-align: top;
    }
    .item1 {
      height: 100px;
      line-height: 100px;
    }
    .item2 {
      height: 100px;
      line-height: 100px;
      font-size: 0;
      span {
        display: inline-block;
        vertical-align: middle;
        font-size: 16px;
      }
    }
  }
</style>
