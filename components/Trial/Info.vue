<template lang="pug">
  .info.mt-md-4(:class="{ 'isDark': isDark }")
    b-col.benefits.px-md-3
      b-row.benefits__item.d-flex.align-items-center.flex-nowrap
        b-icon(icon="star-fill")
        span.ml-2(v-if="!isDark") Exclusive access to
          span.text-orange  350+
          span  learning programs
        span.ml-2.text-blue-light(v-else) Exclusive access to
          span  350+
          span  learning programs
      b-row.benefits__item.d-flex.align-items-center.flex-nowrap
        b-icon(icon="star-fill")
        span.ml-2 Personalized course plan
      b-row.benefits__item.d-flex.align-items-center.flex-nowrap
        b-icon(icon="star-fill")
        span.ml-2 Comfy learning schedule made by you
      b-row.benefits__item.d-flex.align-items-center.flex-nowrap
        b-icon(icon="star-fill")
        span.ml-2(v-if="!isDark")
          span.text-orange 24/7
          span  tutor support in a secure chat
        span.ml-2.text-blue-light(v-else) 24/7 tutor support in a secure chat
      b-row.benefits__item.d-flex.align-items-center.flex-nowrap
        b-icon(icon="star-fill")
        span.ml-2 Lifetime access to materials
    .secure.d-flex.align-items-center.justify-content-center.p-3.mt-4
      Lock
      span.ml-2 Safe & secure payment
    .policy.mt-4 $0.99 charged today. If you don't cancel at least 24 hours before the end of the 3-day trial period, you will automatically be charged the full price of $19.99/Month . You can cancel your subscription at any time. By continuing, you indicate that you've read and agree to our Terms & Conditions, Privacy Policy , Money Back , and Subscription Terms .

</template>

<script lang="ts">
import Vue from 'vue'
import Lock from '~/assets/icons/lock.svg';

export default Vue.extend({
  name: 'TrialInfo',
  components: {
    Lock,
  },
  props: {
    isDark: {
      type: Boolean,
      default: false
    }
  },
})
</script>

<style lang="scss" scoped>
  .info {
    margin-top: 32px;
    &.isDark {
      padding: 0 18px;
      @media screen and (min-width: 768px) {
        padding: 0;
      }
    }
  }
  .benefits {
    max-width: 320px;
    margin: 0 auto;
    @media screen and (min-width: 768px) {
      margin: unset;
      max-width: unset;
    }
    &__item {
      line-height: 120%;
      &:not(:last-child) {
        margin-bottom: 16px;
      }
      .b-icon {
        color: $orange;
      }
    }
  }
  .secure {
    border-radius: 12px;
    border: 1px solid $black20;
    background: $white;
    color: $green;
    font-weight: bold;
    font-size: 16px;
    width: 100%;
  }
  .policy {
    color: $black;
    text-align: center;
    font-size: 12px;
    font-style: normal;
    font-weight: 400;
    line-height: 120%; /* 14.4px */
    opacity: .5;
  }
  .isDark {
    .benefits {
      padding: 0 10px;
      &__item {
        .b-icon {
          color: $light-blue;
        }
      }
    }
    .secure {
      border-radius: 12px;
      background: $black20;
      color: $light-blue;
      border: none;
    }
    .policy {
      color: $white;
      opacity: .7;
    }
  }
</style>
