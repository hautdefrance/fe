<template>
  <div class="playground-wrapper">
    <slot/>
    <transition name="fade">
      <Loading v-if="showLoading"/>
    </transition>
  </div>
</template>

<script>
  import Loading from './Loading.vue'

  export default {
    name: "playground-wrapper",

    components: { Loading },

    data () {
      return { showLoading: true }
    },

    mounted () {
      const iframe = this.$el.children[0]
      if (iframe.tagName === 'IFRAME') {
        if (iframe.contentWindow.document.readyState === 'loading') {
          firstChild.contentWindow.addEventListener('load', () => {
            this.showLoading = false
          }, false)
        } else {
          setTimeout(() => {
            this.showLoading = false
          }, 100)
        }
      }
    }
  }
</script>

<style lang="stylus" scoped>
  .playground-wrapper {
    position: relative;
    background-color: #f5f5f5;
    border-left: 5px solid $green;
  }

  .preloader {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    margin: auto;
  }

  .fade-enter-active, .fade-leave-active {
    transition: opacity .5s;
  }

  .fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */
  {
    opacity: 0;
  }
</style>