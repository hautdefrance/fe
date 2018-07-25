<template>
  <div class="box"
       :class="{
          'border': border
       }">
    <slot></slot>
  </div>
</template>

<script>
  export default {
    props: {
      border: {
        type: Boolean,
        default: false
      }
    }
  }
</script>

<style lang="stylus">
  .box {
    width: 200px;
    height: 50px;
    line-height: 50px;
    text-align: center;
    color: $gray;
    background-color: white;
    &.border {
      border: 1px solid $green;
    }
  }
</style>
