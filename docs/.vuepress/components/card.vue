<template>
  <div
    class="card"
    :class="{
          'shadow': shadow,
          'padding': padding,
          'flex-center': flexCenter,
          'bg': bg
       }"
  >
    <slot></slot>
  </div>
</template>

<script>
  export default {
    props: {
      shadow: {
        type: Boolean,
        default: false
      },
      padding: {
        type: Boolean,
        default: false
      },
      flexCenter: {
        type: Boolean,
        default: false
      },
      bg: {
        type: Boolean,
        default: false
      }
    }
  }
</script>

<style lang="stylus" scoped>
  .card {
    margin: 20px 0;
    &.flex-center {
      display: flex;
      align-items: center;
      justify-content: center;
      & > *:first-child {
        margin-right: 20px;
      }
    }
    &.shadow {
      border: 1px solid #f9f9f9;
      border-radius: 6px;
      box-shadow: -1px 1px 1px 0 rgba(0, 0, 0, .05), 0 10px 20px 0 rgba(0, 0, 0, .15);
    }
    &.padding {
      padding: 10px;
    }
    &.bg {
      background-color: #f1f1f1;
    }
  }
</style>
