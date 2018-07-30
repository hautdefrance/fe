<template>
  <div class="css-center-img">

    <h4><p class="solution-title">方案1 - 使用 table-cell 实现</p></h4>

    <div class="table-cell-solution">
      <div class="img-wrap">
        <div class="table-cell-wrap shadow-card">
          <img src="https://avatars2.githubusercontent.com/u/23133919?s=50&v=4" alt="">
        </div>
      </div>

      <div class="img-wrap">
        <div class="table-cell-wrap shadow-card">
          <img src="https://avatars2.githubusercontent.com/u/23133919?s=100&v=4" alt="">
        </div>
      </div>

      <div class="img-wrap">
        <div class="table-cell-wrap shadow-card">
          <img src="https://avatars2.githubusercontent.com/u/23133919?s=150&v=4" alt="">
        </div>
      </div>
    </div>

    <h4><p class="solution-title">方案2 - 使用 flexbox 实现</p></h4>

    <div class="flexbox-solution">
      <div class="img-wrap">
        <img src="https://avatars2.githubusercontent.com/u/23133919?s=50&v=4" alt="">
      </div>
      <div class="img-wrap">
        <img src="https://avatars2.githubusercontent.com/u/23133919?s=100&v=4" alt="">
      </div>
      <div class="img-wrap">
        <img src="https://avatars2.githubusercontent.com/u/23133919?s=150&v=4" alt="">
      </div>
    </div>
  </div>
</template>

<style lang="stylus" scoped>

  .table-cell-solution {
    display: flex;
    @media (max-width: 719px) {
      flex-direction: column;
      align-items: center;
    }
    .img-wrap {
      flex: 1;
      width: 200px;
      margin-bottom: 20px;
      .table-cell-wrap {
        background-color: $green;
        height: 200px; // 百分比宽高对 table-cell 不生效!
        width: 200px;
        display: table-cell; // 关键
        vertical-align: middle; // 关键
        text-align: center; // 关键
        img {
          vertical-align: middle; // 关键
        }
      }
    }
  }

  .solution-title {
    text-align: center;
  }

  .flexbox-solution {
    display: flex;
    .img-wrap {
      background-color: $green;
      flex: 1;
      margin-right: 45px;
      width: 200px;
      height: 200px;
      display: flex;
      align-items: center;
      justify-content: center;
    }
  }
</style>
