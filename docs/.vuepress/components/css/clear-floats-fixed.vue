<template>
  <div class="items clearfix">
    <div class="item"></div>
    <div class="item"></div>
    <div class="item"></div>
  </div>
</template>

<style lang="stylus" scoped>
  .items {
    background-color: #f1f1f1;
    border: 3px solid #DA5961;
    width: 30%;
    margin: 0 auto;
    .item {
      float: left;
      width: 30%;
      padding-bottom: 30%;
      margin-right: 2%;
      background-color: #3eaf7c;
    }
  }

  .clearfix {
    zoom: 1;
    &::after {
      content: ".";
      display: block;
      height: 0;
      width: 0;
      clear: both;
      visibility: hidden
    }
  }
</style>
