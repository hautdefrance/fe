<template>
  <div
    class="playground-wrapper"
  >
    <div class="header">{{ lang.toUpperCase() }}</div>
    <div class="playground">
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
  </div>
</template>

<script>
  /* global STYLUS_CDN, stylus, window */
  import loadjs from 'loadjs'
  import { asyncLoad } from './util'

  const LANGS = {
    stylus: 'http://stylus-lang.com/try/stylus.min.js'
  }

  export default {
    mounted () {
      if (!LANGS[this.lang]) {
        throw new Error(`[Playground] Unsupported language ${this.lang}`)
      }
      if (loadjs.isDefined(this.lang)) return
      asyncLoad(LANGS[this.lang], this.lang)
        .then(() => {
          this.transformer = window[this.lang]
          this.source = this.$refs.code.innerText
        })
    },

    props: {
      lang: {
        type: String,
        default: ''
      }
    },

    data () {
      return {
        source: ''
      }
    },

    computed: {
      transformed () {
        if (!this.transformer) return this.source
        return this.transformer.render(this.source)
      }
    }
  }
</script>

<style lang="stylus" scoped>
  .playground-wrapper {
    margin: 20px 0;
    background-color: $green;
    border: 1px solid #ddd;
    background-color: #f2f2f2;
    border-radius: 6px;
  }

  .playground {
    height: 400px;
    display: flex;
    padding: 0 5px 5px 5px;
    transition: all 0.3s;
    @media (max-width: 719px) {
      height: 500px;
      flex-direction: column;
      align-items: center;
    }
  }

  .header {
    color: #666;
    padding: 5px 8px;
    text-align: right;
    letter-spacing: 10px;
    font-size: 0.8em
  }

  .source {
    @media (min-width: 719px) {
      margin-right: 5px;
    }
    @media (max-width: 719px) {
      margin-bottom: 5px;
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
      min-height: 100%;
      max-height: 100%;
      font-size: 16px;
      font-family: monospace;
      box-sizing: border-box;
      border: 1px solid #ddd;
      padding: 10px;
      border-radius: 6px;
      resize: none; // 禁止拉伸
      overflow: scroll;
      &:focus {
        outline: none
      }
    }
  }

  .preview {
    flex: 1; // flex: 1 1 1;
    // flex: auto; // flex: 1 1 auto;
    overflow: scroll;
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
