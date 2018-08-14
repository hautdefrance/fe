<template>
  <div
    class="playground"
  >
    <div class="source">
      <textarea v-model="source"></textarea>
    </div>
    <div class="preview">
      <pre><code>{{ transformed }}</code></pre>
    </div>
    <div class="slot-code">
      <pre><code ref="code"><slot></slot></code></pre>
    </div>
  </div>
</template>

<script>
  /* global STYLUS_CDN, stylus */
  import loadjs from 'loadjs'
  import { asyncLoad } from './util'

  export default {
    mounted () {
      if (loadjs.isDefined('stylus')) return
      asyncLoad(STYLUS_CDN, 'stylus')
        .then(() => {
          this.source = this.$refs.code.innerText
        })
    },

    props: {
      shadow: {
        type: Boolean,
        default: false
      },

      padding: {
        type: Boolean,
        default: false
      },

      flexCenter: {
        type: Boolean,
        default: false
      },

      bg: {
        type: Boolean,
        default: false
      }
    },

    data () {
      return {
        source: ''
      }
    },

    computed: {
      transformed () {
        if (!window.stylus) return this.source
        return window.stylus.render(this.source)
      }
    }
  }
</script>

<style lang="stylus" scoped>
  .playground {
    height: 400px;
    display: flex;
    padding: 10px;
    background-color: $green;
    border-radius: 6px;
    transition: all 0.3s;
    @media (max-width: 719px) {
      height: 500px;
      flex-direction: column;
      align-items: center;
    }
  }

  .source {
    @media (min-width: 719px) {
      margin-right: 10px;
    }
    @media (max-width: 719px) {
      margin-bottom: 10px;
    }
  }

  .source, .preview {
    @media (min-width: 719px) {
      height: 100%;
    }
    @media (max-width: 719px) {
      width: 100%;
    }
  }

  .source {
    flex: 1;
    textarea {
      width: 100%;
      height: 100%;
      font-size: 16px;
      font-family: monospace;
      box-sizing: border-box;
      border: 2px solid $green;
      padding: 10px;
      border-radius: 6px;
      &:focus {
        outline: none
      }
    }
  }

  .preview {
    flex: 1;
    pre {
      margin: 0;
      box-sizing: border-box;
      width: 100%;
      height: 100%;
    }
  }

  .slot-code {
    display: none;
  }

</style>
