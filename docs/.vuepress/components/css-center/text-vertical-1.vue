<template>
  <div class="text-center-vertical-1 wrapper">
    <div class="item item1 inline-card">
      Lorem ipsum (方案1).
    </div>
    <div class="item item2 inline-card">
      <span>Lorem ipsum (方案2).</span>
    </div>
  </div>
</template>

<style lang="stylus" scoped>
  .wrapper {
    text-align: center;
    .item {
      @extend $shadow;
      width: 40%;
      display: inline-block;
      margin-right: 10px;
      vertical-align: top;
    }
    .item1 {
      height: 50px;
      line-height: 50px;
    }
    .item2 {
      height: 50px;
      line-height: 50px;
      font-size: 0;
      span {
        display: inline-block;
        vertical-align: middle;
        font-size: 16px;
      }
    }
  }
</style>
