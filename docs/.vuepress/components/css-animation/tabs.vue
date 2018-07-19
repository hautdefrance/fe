<template>
  <ul class='animation-tabs'
      :active-index="activeIndex >= 0 ? activeIndex : null">
    <li class='active-bg'></li>
    <li v-for="(item, index) in items"
        :key="index"
        :class="{ 'active' : activeIndex === index }"
        @click="switchTab(index)"
        class="tab-item">
      {{ item }}
    </li>
  </ul>
</template>

<script>
  export default {
    props: {
      items: {
        type: Array,
        default: () => (['Vue.js', 'Vue-Router', 'VueX', 'Vue-CLI']),
      }
    },
    data() {
      return {
        activeIndex: -1
      }
    },
    methods: {
      switchTab(index) {
        this.activeIndex = index
      }
    }
  }
</script>

<style lang="stylus" scoped>

  $width = 600px;
  $height = 40px;

  .animation-tabs {
    @extend $clearfix;
    position: relative;
    margin: 0 auto;
    box-sizing: border-box;
    border-radius: 25px;
    border: solid 2px $green;
    max-width: $width;
    list-style: none;
    padding: 0px;
    overflow: hidden;

    .tab-item, .active-bg {
      width: 25%;
      height: $height;
      line-height: $height;
      text-align: center;
    }

    .tab-item {
      position: relative;
      cursor: pointer;
      box-sizing: border-box;
      float: left;
      color: $text-light;
      transition: color ease .3s, background-color ease-out .2s;
      &.active {
        color: white;
        border-right: none;
      }
      &:not(.active):hover {
        background-color: #f2f2f2;
      }
    }

    .active-bg {
      position: absolute;
      transition: transform ease-out .3s, background-color ease-out .2s;
      background-color: #fff;
      &::before {
        bottom: -28px;
        left: calc(50% - 10px);
      }
      &::after {
        right: -2px;
        height: 100%;
        width: 2px;
        background-color: $green;
      }
    }

    &[active-index] > .active-bg {
      display: block;
      background-color: $green;
    }

    &[active-index="0"] > .active-bg {
      transform: translateX(0);
    }
    &[active-index="1"] > .active-bg {
      transform: translateX(100%);
    }
    &[active-index="2"] > .active-bg {
      transform: translateX(200%);
    }
    &[active-index="3"] > .active-bg {
      transform: translateX(300%);
    }
  }
</style>
