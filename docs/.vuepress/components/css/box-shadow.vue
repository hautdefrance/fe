<template>
  <div class="css-box-shadow">
    <div class="box">normal</div>
    <div class="box inset">inset</div>
  </div>
</template>

<style lang="stylus" scoped>
  .css-box-shadow {
    padding 8px
    display: flex;
    justify-content: center;
  }

  .box {
    width: 200px;
    height: 50px;
    line-height: 50px;
    margin-right: 20px;
    text-align: center;
    color: $gray;
    background-color: white;
    box-shadow: 0 1px 3px rgba(0, 0, 0, .5), 0 1px 0 rgba(255, 255, 255, .1);
    &.inset {
      box-shadow: inset 0 1px 3px rgba(0, 0, 0, .5), 0 1px 0 rgba(255, 255, 255, .1);
    }
  }
</style>
