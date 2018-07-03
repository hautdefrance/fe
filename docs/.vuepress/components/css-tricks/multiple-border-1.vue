<template>
  <div class="multiple-border-1 box"></div>
</template>

<style lang="stylus" scoped>
  .box {
    width: 120px;
    height: 120px;
    padding: 5px 0 0 5px;
    box-sizing: border-box;
    background-color: green;
  }

  .box::after {
    content: "";
    display: block;
    width: 100px;
    height: 100px;
    border: 5px solid red;
    background-color: black;
  }
</style>
