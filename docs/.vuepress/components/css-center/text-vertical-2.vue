<template>
  <div class="text-center-vertical-2">
    <div class="item item1 card">
      <span>Lorem ipsum (方案1)</span>
    </div>
    <div class="item item2 card">
      <span>Lorem ipsum (方案2)</span>
    </div>
  </div>
</template>

<style lang="stylus" scoped>
  .text-center-vertical-2 {
    height: 100px;
    display: flex;
    .item {
      @extend $shadow;
      flex: 1;
      margin-right: 10px;
      height: 100%;
    }
    .item1 {
      display: table;
      text-align: center;
      span {
        display: table-cell;
        vertical-align: middle;
      }
    }
    .item2 {
      display: flex;
      justify-content: center;
      align-items: center;
    }
  }
</style>
