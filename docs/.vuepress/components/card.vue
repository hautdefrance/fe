<template>
  <div class="card">
    <slot></slot>
  </div>
</template>

<style lang="stylus" scoped>
  .card {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 10px;
    padding: 10px;
    box-shadow: -1px 1px 1px 0 rgba(0, 0, 0, .05), 0 10px 20px 0 rgba(0, 0, 0, .15);
    border: 1px solid #f9f9f9;
    border-radius: 6px;
  }
</style>
