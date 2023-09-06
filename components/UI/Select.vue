<template lang="pug">
  .select(
    @blur="open = false"
    :class="{ 'isDark': isDark }"
  )
    .select__current.d-flex.align-items-center(
      :class="{ open: open }"
      @click="open = !open"
    )
      .select__label.position-absolute.font-weight-bold {{ label }}
      span(v-if="selected") {{ selected }}
      span.select__placeholder(v-else) {{ placeholder }}
      b-icon.select__chevron(icon="chevron-down")
    .select__dropdown(
      :class="{ hideSelect: !open }"
    )
      .select__item.d-flex.justify-content-between.align-items-center(
        v-for="(item, i) of options"
        :key="i"
        @click="selected = item;open = false;$emit('input', item);"
      )
        span {{ item }}
        b-icon.icon(icon="check2")
</template>

<script>
export default {
  name: 'Select',
  props: {
    options: {
      type: Array,
      required: true,
    },
    label: {
      type: String,
      required: true,
    },
    placeholder: {
      type: String,
      required: true,
    },
    isDark: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      selected: null,
      open: false,
    };
  },
  mounted() {
    this.$emit('input', this.selected);
  },
}
</script>

<style lang="scss" scoped>
  .select {
    position: relative;
    width: 100%;
    text-align: left;
    outline: none;
    min-height: 46px;
    height: 46px;
    line-height: 46px;
    &__current {
      position: relative;
      height: 100%;
      border-radius: 8px;
      border: 1px solid $grey;
      background: $white;
      color: #6C727F;
      font-size: 12px;
      font-style: normal;
      font-weight: 400;
      line-height: normal;
      padding-left: 16px;
      cursor: pointer;
      user-select: none;
      &.open {
        border-radius: 8px 8px 0 0;
        border-color: $green;
      }
     }
    &__label {
      top: -8px;
      left: 12px;
      background: $white;
      color: $black-blue;
      font-size: 12px;
      padding: 0 5px;
    }
    &__placeholder {
      color: $dark-grey;
      font-size: 12px;
      font-weight: 400;
    }
    &__chevron {
      color: $dark-grey;
      position: absolute;
      font-size: 17px;
      right: 12px;
      top: 50%;
      transform: translateY(-50%);
    }
    &__dropdown {
      color: $black;
      border-radius: 0 0 6px 6px;
      overflow: hidden;
      border-right: 1px solid $white-smoky;
      border-left: 1px solid $white-smoky;
      border-bottom: 1px solid $white-smoky;
      position: absolute;
      background-color: white;
      left: 0;
      right: 0;
      z-index: 1;
    }
    &__item {
      height: 32px;
      color: $dark-grey;
      padding: 8px 8px 8px 16px;
      cursor: pointer;
      user-select: none;
      border-bottom: 1px solid $white-smoky;
      .icon {
        display: none;
        width: 16px;
      }
      &:hover {
        background-color: $green;
        color: $white;
        .icon {
          display: block;
        }
      }
      span {
        font-size: 12px;
      }
    }
  }
  .hideSelect {
    display: none;
  }
  .isDark {
    .select {
      &__current {
        background: $grey-blue;
        border-color: $grey-blue;
        color: $white;
        &.open {
          border-color: $purple-blue2;
        }
      }
      &__placeholder, &__chevron {
        color: $white
      }
      &__label {
        background: $grey-blue;
        border-radius: 30px;
        color: $white;
      }
      &__dropdown {
        border-color: $grey-darker;
      }
      &__item {
        background: $grey-blue;
        color: $white;
        border-color: $grey-darker;
        &:hover {
          background-color: $purple-blue;
          color: $white;
          .icon {
            display: block;
          }
        }
      }
    }
  }
</style>
