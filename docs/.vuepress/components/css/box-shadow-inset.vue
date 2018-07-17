<template>
  <Box class="inset-box-shadow">normal</Box>
</template>

<script>
  import Box from '../box.vue'
  export default {
    components: { Box }
  }
</script>

<style lang="stylus">
  .inset-box-shadow {
    box-shadow: inset 0 1px 3px rgba(0, 0, 0, .5), 0 1px 0 rgba(255, 255, 255, .1);
  }
</style>
