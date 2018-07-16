<template>
  <div @click="selected = !selected"
       class='animation-checkbox' :class="{ 'selected' : selected }">
    <svg class="icon-selected" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg">
      <path fill="white"
            d="M869.66 102.485l-503.318 501.329-200.543-210.069-85.339 85.338 285.882 295.409 588.657-586.667-85.34-85.339z"></path>
    </svg>
    <span class='checkbox-text'>Add</span>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        selected: false
      }
    }
  }
</script>

<style lang="stylus" scoped>
  @import '~vuepress/lib/default-theme/styles/config.styl'

  //~ Common style for postad feature START ~//
  @keyframes checkbox-scaleout {
    0% {
      opacity: 1;
      transform: scale(0);
    }
    100% {
      opacity: 0;
      transform: scale(1);
    }
  }

  .animation-checkbox {
    cursor: pointer;
    position: relative;
    box-sizing: border-box;
    width: 64px;
    height: 40px;
    line-height: 40px;
    border-radius: 2px;
    border: solid 2px $accentColor;
    font-size: 18px;
    text-align: center;
    cursor: pointer;
    box-shadow: 1px 2px 1px 0 rgba(56, 52, 31, 0.17);
    color: $accentColor;
    transition: all 0.5s ease;
    overflow: hidden;
    .icon-selected {
      width: 40px;
      vertical-align: center;
      display: none;
    }
    &.selected {
      color: #FFFFFF;
      background-color: $accentColor;
      .icon-selected {
        display: inline-block;
      }
      .checkbox-text {
        display: none;
      }
      &:after {
        content: "";
        position: absolute;
        top: -32px;
        left: calc(50% - 50px);
        width: 100px;
        height: 100px;
        background-color: $accentColor;
        border-radius: 100%;
        animation: checkbox-scaleout 0.3s 1 ease-out;
        opacity: 0;
      }
    }
  }
</style>
