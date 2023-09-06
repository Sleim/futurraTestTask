<template lang="pug">
  .input.position-relative(:class="{ 'isDark': isDark }")
    b-input(
      v-bind="$attrs"
      :class="{ 'errored': errorMessage }"
      @change="$emit('input', $event)"
    )
    .input__label.position-absolute.font-weight-bold {{ label }}
    .input__append.position-absolute.d-flex.align-items-center
      .input__error-message {{ errorMessage }}
      slot(name="appendIcon")
</template>

<script>
export default {
  name: 'Input',
  props: {
    label: {
      type: String,
      required: true,
    },
    errorMessage: {
      type: String,
      required: false,
    },
    isDark: {
      type: Boolean,
      default: false
    }
  }
}
</script>

<style lang="scss" scoped>
  .input {
    &__append {
      right: 12px;
      top: 50%;
      transform: translateY(-50%);
    }
    &__label {
      top: -8px;
      left: 12px;
      background: $white;
      color: $black-blue;
      font-size: 12px;
      padding: 0 5px;
    }
    &__error-message {
      font-size: 7px;
      font-style: normal;
      font-weight: 600;
      line-height: normal;
      color: $red;
      @media screen and (min-width: 768px) {
        font-size: 11px;
      }
    }
    ::v-deep .form-control {
      border-radius: 8px;
      height: 46px;
      font-size: 14px;
      &:focus {
        box-shadow: none;
        border-color: $green;
      }
      &.errored {
        border-color: $red;
      }
    }
  }

  .isDark {
    .input {
      &__label {
        background: #617398;
        border-radius: 30px;
        color: $white;
      }
    }
    &.input::v-deep .form-control {
      background: #617398;
      border-color: #617398;
      color: $white;
      &:focus {
        box-shadow: none;
        border-color: #7899FFFF;
      }
      &.errored {
        border-color: #ff0000;
      }
      &::placeholder {
        color: $white;
      }
    }
  }
</style>
