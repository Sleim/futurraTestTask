<template lang="pug">
  .price.align-items-center.justify-content-between(:class="{ 'isDark': isDark }")
    .price__info(:class="{'no-timer': countdownExpired}")
      .price__trial.font-weight-bold.mb-2 3-day trial for
        span.orange-text  $0.99
      template(v-if="!countdownExpired")
        .price__after Then $9.99
        .price__discounted $39.99/week
      .price__after.second(v-else) Then $39.99/week
    Timer(
      v-if="!countdownExpired"
      :isDark="isDark"
      :count="countdownTime"
      @countdownEnd="countdownExpired = true"
    )
</template>

<script lang="ts">
import Vue from 'vue'
import Timer from '~/components/UI/Timer.vue';

export default Vue.extend({
  name: 'PricePlan',
  components: {Timer},
  props: {
    isDark: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      countdownTime: 0,
      countdownExpired: false,
    }
  },
  created() {
    const countdownTime = parseInt(<string>localStorage.getItem(
      this.isDark
        ? 'countdownDarkLeft'
        : 'countdownLightLeft'
    ));
    if (isNaN(countdownTime)) {
      this.countdownTime = 180
    } else if (countdownTime === 0) {
      this.countdownExpired = true
    } else {
      this.countdownTime = countdownTime
    }
  }
})
</script>

<style lang="scss" scoped>
  .price {
    border-radius: 12px;
    border: 1px solid $grey;
    padding: 12px 16px;
    width: 100%;
    height: 92px;
    @media screen and (min-width: 768px) {
      border: none;
      padding: unset;
      height: 85px;
    }
    &__info.no-timer {
      margin: 0 auto;
      text-align: center;
      @media screen and (min-width: 768px) {
        margin: unset;
        text-align: left;
      }
    }
    &__trial {
      font-size: 18px;
      line-height: 120%;
      @media screen and (min-width: 1000px) {
        font-size: 24px;
      }
    }
    &__after {
      font-weight: 600;
      line-height: 120%;
      @media screen and (min-width: 768px) {
        font-size: 20px;
      }
    }
    &__discounted {
      font-size: 14px;
      font-style: normal;
      font-weight: 600;
      line-height: 140%;
      text-decoration: line-through;
      opacity: 0.4;
      @media screen and (min-width: 768px) {
        font-size: 16px;
      }
    }
  }
  .isDark {
    .price {
      &__trial {
        color: $light-blue
      }
    }
    &.price {
      background: $black60;
      border-radius: 24px;
      border: none;
      @media screen and (min-width: 768px) {
        background: unset;
      }
    }
  }
</style>
