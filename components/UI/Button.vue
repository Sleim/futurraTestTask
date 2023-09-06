<template lang="pug">
  b-button.button(
    :class="color"
    v-bind="$attrs"
    @click="$emit('click')"
  )
    slot
</template>

<script>
export default {
  name: 'Button',
  props: {
    color: {
      type: String,
      default: 'dark',
    }
  }
}
</script>

<style lang="scss" scoped>
  .button {
    font-size: 16px;
    font-style: normal;
    border: none;
    font-weight: 700;
    padding: 16px 40px;
    border-radius: 12px;
    &:hover {
      cursor: pointer;
    }
    &:focus {
      box-shadow: none!important;
    }
    &.dark {
      background: $black;
      color: $white;
      &:hover {
        color: $white;
        background: $green;
        border-color: $green;
      }
      &:active {
        background: $green!important;
      }
      &.disabled {
        background: $grey!important;
        cursor: default;
        &:active {
          background: $grey!important;
        }
      }
    }
    &.light {
      background: $white;
      color: $darker-blue;
      &:hover {
        color: white;
        background: $purple-blue;
        border-color: $purple-blue;
      }
      &:active {
        background: $purple-blue!important;
      }
      &.disabled {
        background: $grey-blue!important;
        cursor: default;
        color: #FFFFFF66;
        &:active {
          background: $grey-blue!important;
        }
      }
    }
  }
</style>
