<template>
  <div
    class="css-center-block-2"
    :style="{
      'height': height + 'px'
    }"
  >
    <div class="block"></div>
    <div class="height-switch">
      <span>Height: </span>
      <input
        min="100"
        class="height"
        v-model="height"
        type="number"
      >
    </div>
  </div>
</template>

<script>
  export default {
    data () {
      return { height: 150 }
    }
  }
</script>

<style lang="stylus" scoped>
  .css-center-block-2 {
    position: relative;
    .block {
      position: absolute;
      top: 0;
      right: 0;
      left: 0;
      bottom: 0;
      margin: auto;
      background-color: $green;
      width: 100px;
      height: 100px;
    }
    .height-switch {
      position: absolute;
      top: 20px;
      right: 20px;
    }
  }
</style>
