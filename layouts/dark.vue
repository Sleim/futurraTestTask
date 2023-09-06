<template lang="pug">
  .holder
    b-container
      header.py-2
        LogoDark
      main
        b-container
          b-row.justify-content-center.flex-column.flex-md-row
            Price.d-flex.d-md-none(isDark)
            b-col.plan.pt-3.px-3.pt-md-2.px-md-0
              h1.plan__title
                span.text-blue Start
                span  your learning journey
                span.text-blue  now
              h3.plan__text.mt-3.mt-md-4.mb-0 Get a
                span.font-weight-bold.text-blue  Smart
                span.font-weight-bold Study
                span  plan to rock self-learning
              Button.plan__button(
                color="light"
                @click="showModal = true"
              ) Get my plan
            b-col.trial.position-relative.px-0
              Planet.trial__image2.position-absolute.d-none.d-md-block
              .trial__holder.px-0.px-md-4.py-md-4.position-relative
                Rocket.trial__image.position-absolute.d-none.d-lg-block
                Price.d-none.d-md-flex(isDark)
                Info(isDark)
      PaymentModal(
        v-if="showModal"
        :showModal="showModal"
        isDark
        @closeModal="showModal = false"
      )
</template>

<script>
import Vue from 'vue'
import LogoDark from '~/assets/icons/logo_dark.svg';
import Rocket from '~/assets/icons/rocket.svg';
import Planet from '~/assets/icons/ball_dark.svg';
import Price from '../components/Trial/Price';
import Info from '../components/Trial/Info';
import PaymentModal from '../components/Modals/PaymentModal';
import Button from '../components/UI/Button';

export default Vue.extend({
  name: 'DarkLayout',
  data() {
    return {
      showModal: false,
    }
  },
  components: {
    Button,
    PaymentModal,
    Info,
    Price,
    LogoDark,
    Rocket,
    Planet,
  },
})
</script>

<style lang="scss" scoped>
  .holder {
    background-image: url('~assets/images/bg_dark.png');
    background-size: cover;
    overflow: hidden;
    background-position: bottom;
  }
  main {
    color: $white;
    padding: 24px 0;
    @media screen and (min-width: 768px) {
      padding: 65px 0;
    }
    .plan {
      margin-top: 24px;
      background: $black;
      border-top-right-radius: 24px;
      border-top-left-radius: 24px;
      @media screen and (min-width: 768px) {
        background: unset;
        max-width: 474px;
        margin-top: 0;
      }
      &__title {
        font-size: 32px;
        font-style: normal;
        font-weight: 800;
        line-height: 120%;
        @media screen and (min-width: 768px) {
          font-size: 43px;
          text-transform: uppercase;
        }
      }
      &__text {
        font-size: 24px;
        font-weight: 600;
        max-width: 323px;
      }
      &__button {
        max-width: 320px;
        width: 100%;
        display: block;
        margin: 32px auto 0;
        @media screen and (min-width: 768px) {
          max-width: 273px;
          display: inline;
        }
      }
    }
    .trial {
      background: $black60;
      border-bottom-right-radius: 24px;
      border-bottom-left-radius: 24px;
      padding-bottom: 16px;
      @media screen and (min-width: 768px) {
        max-width: 474px;
        background: unset;
      }
      &__holder {
        @media screen and (min-width: 768px) {
          border-radius: 32px;
          border: 4px solid rgba(255, 255, 255, 0.40);
          background: rgba(0, 0, 0, 0.40);
          backdrop-filter: blur(10px);
        }
      }
      &__image {
        top: 76px;
        right: -180px;
      }
      &__image2 {
        top: -25px;
        left: -45px;
      }
    }
  }
</style>
