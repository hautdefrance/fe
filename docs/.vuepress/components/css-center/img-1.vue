<template>
  <div class="css-center-img-1">
    <div class="height-switch">
      <span>Height: </span>
      <input
        min="100"
        class="height"
        v-model="height"
        type="number"
      >
    </div>
    <div class="css-center-img-1-content">
      <div
        v-for="image in images"
        class="img-wrap"
      >
        <div
          class="table-cell-wrap"
          :style="{
          'height': height + 'px'
        }"
        >
          <img :src="image" alt="">
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        height: 200,
        images: [
          'https://avatars2.githubusercontent.com/u/23133919?s=50&v=4',
          'https://avatars2.githubusercontent.com/u/23133919?s=100&v=4',
          'https://avatars2.githubusercontent.com/u/23133919?s=150&v=4',
        ]
      }
    }
  }
</script>

<style lang="stylus" scoped>
  .css-center-img-1-content {
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
        transition: all .3s;
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

  .height-switch {
    padding: 10px;
    flex: 0;
  }
</style>
