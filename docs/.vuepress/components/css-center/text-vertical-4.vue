<template>
  <div
    class="css-center-text-vertical-3"
    :style="{
      'height': height + 'px'
    }"
  >
    <span class="text">Lorem ipsum</span>
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
      return { height: 100 }
    }
  }
</script>

<style lang="stylus" scoped>
  .css-center-text-vertical-3 {
    position: relative;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: all .3s;
    .height-switch {
      position: absolute;
      top: 20px;
      right: 20px;
    }
  }
</style>
