<template>
  <ul class='animation-tabs'
      :class="{
        'active': active,
        'radius': radius
      }"
      :active-index="internalActiveIndex >= 0 ? internalActiveIndex : null">
    <li class='active-bg'></li>
    <li v-for="(item, index) in items"
        :key="index"
        :class="{ 'active' : internalActiveIndex === index }"
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
      },
      activeIndex: {
        type: Number,
        default: -1
      },
      radius: {
        type: Boolean,
        default: false
      }
    },

    data() {
      return {
        internalActiveIndex: this.activeIndex,
        active: false
      }
    },

    mounted() {
      setTimeout(() => {
        this.active = this.internalActiveIndex >= 0
      })
    },

    methods: {
      switchTab(index) {
        // We cannot use $nextTick here since $nextTick uses microtask by
        // default. microtasks have too high a priority so the two data's
        // change will be merged into a patch update, but we need two
        // updates here.
        this.internalActiveIndex = index
        setTimeout(() => {
          this.active = this.internalActiveIndex >= 0
        })
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
    border: solid 2px $green;
    max-width: $width;
    list-style: none;
    padding: 0px;

    &.radius {
      overflow: hidden;
      border-radius: 25px;
    }

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
      border-right: solid 2px $green;
      &:last-child {
        border-right: none;
      }
      &.active {
        color: white;
      }
      &:not(.active):hover {
        background-color: alpha($green, .1);
      }
    }

    .active-bg {
      position: absolute;
      transition: background-color ease-out .2s;
      background-color: #fff;
    }

    &.active > .active-bg {
      display: block;
      background-color: $green;
      transition: transform ease-out .3s, background-color ease-out .2s;
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
