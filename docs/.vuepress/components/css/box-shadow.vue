<template>
  <Box class="box-shadow">normal</Box>
</template>

<script>
  import Box from '../box.vue'
  export default {
    components: { Box }
  }
</script>

<style lang="stylus">
  .box-shadow {
    box-shadow: 0 1px 3px rgba(0, 0, 0, .5), 0 1px 0 rgba(255, 255, 255, .1);
  }
</style>
