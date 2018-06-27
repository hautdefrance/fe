<template>
  <div class="css-flexbox wrapper">
    <div v-for="(item, i) in list" :key="i" class="row">
      <div v-for="(subitem, j) in item" :key="j" class="item"></div>
    </div>
  </div>
</template>

<script>
  function createSparseArray (length) {
    return Object.keys(Array.apply(null, { length }))
  }
  export default {
    data() {
      return {
        list: createSparseArray(5).map((item, index) => createSparseArray(index + 1))
      }
    }
  }
</script>

<style lang="stylus" scoped>
  $gutter = 5px

  .css-flexbox {
    padding: $gutter;
    background-color: #eee;
  }

  .row {
    display: flex;
    margin-bottom $gutter;
    &:last-child {
      margin-bottom 0px;
    }
  }

  .item {
    flex: 1;
    height: 30px;
    background-color: #fff;
    margin-right: $gutter;
    &:last-child {
      margin-right: 0px;
    }
  }
</style>
