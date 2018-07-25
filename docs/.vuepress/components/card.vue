<template>
  <div class="card"
       :class="{
          'shadow': shadow,
          'no-padding': noPadding,
          'flex-center': flexCenter
       }">
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
      noPadding: {
        type: Boolean,
        default: false
      },
      flexCenter: {
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
  }
</style>
