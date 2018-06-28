<template>
  <div class="css-center-img">
    <div class="solution-1 shadow-card">
      <img src="https://avatars2.githubusercontent.com/u/23133919?s=50&v=4" alt="">
    </div>
    <div class="solution-1 shadow-card">
      <img src="https://avatars2.githubusercontent.com/u/23133919?s=100&v=4" alt="">
    </div>
    <div class="divide">方案1 - 使用 table-cell 实现</div>
    <div class="solution-2">
      <img src="https://avatars2.githubusercontent.com/u/23133919?s=40&v=4" alt="">
      <img src="https://avatars2.githubusercontent.com/u/23133919?s=100&v=4" alt="">
      <img src="https://avatars2.githubusercontent.com/u/23133919?s=200&v=4" alt="">
    </div>
  </div>
</template>

<style lang="stylus" scoped>
  .css-center-img {
    text-align: center;
  }

  .divide {
    text-align: center;
    height: 50px;
    line-height: 50px;
    color: $gray;
  }

  .solution-1 {
    width: 200px;
    height: 150px;
    display: table-cell;
    vertical-align: middle;
    margin-right: 20px; // 请注意这个 margin 对 table-cell 是不生效的！
    img {
      vertical-align: middle;
    }
  }

  .solution-2 {

  }
</style>
