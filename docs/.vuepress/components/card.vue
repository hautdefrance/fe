<template>
  <div class="card"
       :class="{
          'shadow': shadow,
          'no-padding': noPadding,
          'flex': flex,
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
      flex: {
        type: Boolean,
        default: false
      }
    }
  }
</script>

<style lang="stylus" scoped>
  .card {
    margin: 15px 0;
    padding: 10px;
    &.flex {
      display: flex;
      align-items: center;
      justify-content: center;
    }
    &.shadow {
      border: 1px solid #f9f9f9;
      border-radius: 6px;
      box-shadow: -1px 1px 1px 0 rgba(0, 0, 0, .05), 0 10px 20px 0 rgba(0, 0, 0, .15);
    }
    &.no-padding {
      padding: 0px;
    }
  }
</style>
