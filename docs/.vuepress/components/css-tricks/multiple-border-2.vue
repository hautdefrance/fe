<template>
  <div class="multiple-border-2 outer">
    <div class="inner"></div>
  </div>
</template>

<style lang="stylus" scoped>
  .outer {
    width: 120px;
    height: 120px;
    padding: 5px 0 0 5px;
    box-sizing: border-box;
    background-color: green;
  }

  .inner {
    width: 100px;
    height: 100px;
    border: 5px solid red;
    background-color: black;
  }
</style>
