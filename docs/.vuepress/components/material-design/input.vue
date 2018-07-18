<template>
  <div class="md-input">
    <input v-model="value"
           :class="{ 'non-empty' : value }"
           @click="$emit('change', value)"
           :type="type"
           :required="required">
    <span class="highlight"></span>
    <span class="bar"></span>
    <label>{{ placeholder }}</label>
  </div>
</template>

<script>
  export default {
    model: {
      prop: 'value',
      event: 'change'
    },
    props: {
      value: {
        type: String,
        default: '',
      },
      type: {
        type: String,
        default: 'text',
        required: true
      },
      placeholder: {
        type: String,
        default: ''
      },
      required: {
        type: Boolean,
        default: false,
      }
    }
  }
</script>

<style lang="stylus">
  .md-input {
    margin: 40px 0;
    position: relative;
    * {
      box-sizing: border-box;
    }

    input {
      font-size: 18px;
      padding: 10px 10px 10px 5px;
      display: block;
      width: 300px;
      border: none;
      color: #757575;
      border-bottom: 1px solid #757575;
      &:focus {
        outline: none;
        border-color: $green;
      }
      &.non-empty ~ label, &:focus ~ label {
        top: -20px;
        font-size: 14px;
        color: $green;
      }
      &:focus ~ .bar:before, &:focus ~ .bar:after {
        width: 50%;
      }
      &:focus ~ .highlight {
        animation: inputHighlighter 0.3s ease;
      }
    }

    label {
      color: #999;
      font-size: 18px;
      font-weight: normal;
      position: absolute;
      pointer-events: none;
      left: 5px;
      top: 10px;
      transition: 0.2s ease all;
    }

    .bar {
      position: relative;
      display: block;
      width: 300px;
      &:before, &:after {
        content: '';
        height: 2px;
        width: 0;
        bottom: 1px;
        position: absolute;
        background: $green;
        transition: 0.2s ease all;
      }
      &:before {
        left: 50%;
      }
      &:after {
        right: 50%;
      }
    }

    .highlight {
      position: absolute;
      height: 60%;
      width: 100px;
      top: 25%;
      left: 0;
      pointer-events: none;
      opacity: 0.5;
    }
  }

  @keyframes inputHighlighter {
    from {
      background: $green;
    }
    to {
      width: 0;
      background: transparent;
    }
  }
</style>
