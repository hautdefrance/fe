<template>
  <div class="card" :class="{ 'shadow': shadow }">
    <slot></slot>
  </div>
</template>

<script>
  export default {
    props: {
      shadow: {
        type: Boolean,
        default: false
      }
    }
  }
</script>

<style lang="stylus" scoped>
  .card {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 10px;
    padding: 10px;
    &.shadow {
      border: 1px solid #f9f9f9;
      border-radius: 6px;
      box-shadow: -1px 1px 1px 0 rgba(0, 0, 0, .05), 0 10px 20px 0 rgba(0, 0, 0, .15);
    }
  }
</style>
