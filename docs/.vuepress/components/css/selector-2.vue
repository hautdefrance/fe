<template>
  <div class="css-selector-2" data-text="I am the text from attr."></div>
</template>

<style lang="stylus">
  .css-selector-2::before {
    content: attr(data-text)
  }
</style>
