<template>
  <div class="css-layout-float-2">
    <div class="item"></div>
    <div class="item"></div>
    <div class="item"></div>
  </div>
</template>

<style lang="stylus" scoped>
  .css-layout-float-2 {
    @extend $clearfix;
  }

  .item {
    float: left;
    width: 32%;
    height: 40px;
    background-color: #f2f2f2;
    margin-right: 2%;
    &:last-child {
      margin-right: 0;
    }
    // 3x + 2y = 100
    // y = 2
  }
</style>