<template>
  <div class="css-content-box">
    <div class="sub-box"></div>
  </div>
</template>

<style lang="stylus" scoped>
  .css-content-box {
    box-sizing: border-box;
    width: 100px;
    height: 100px;
    background-color: $green;
    border: 10px solid $gray;
    padding: 10px;
  }

  .sub-box {
    width: 100%;
    height: 100%;
    background-color: $yellow;
  }
</style>
