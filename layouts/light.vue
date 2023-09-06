<template lang="pug">
  .holder
    b-container
      header.py-2
        LogoLight
      main
        b-container
          b-row.justify-content-center.flex-column.flex-md-row
            Price.d-flex.d-md-none
            b-col.plan.pt-4.pt-md-2.px-0.px-md-2
              h1.plan__title Start your learning journey now
              h3.plan__text.mt-3.mt-md-4.mb-0 Get a
                span.font-weight-bold.text-orange  Planet
                span.font-weight-bold Learn
                span  plan to rock self-learning
              Button.plan__button(
                color="dark"
                @click="showModal = true"
              ) Get my plan
            b-col.trial.px-0.px-md-4.py-md-4.position-relative
              Asteroid.trial__image.position-absolute.d-none.d-md-block
              Price.d-none.d-md-flex
              Info
      PaymentModal(
        v-if="showModal"
        :showModal="showModal"
        @closeModal="showModal = false"
      )
</template>

<script>
import Vue from 'vue'
import LogoLight from '~/assets/icons/logo_light.svg';
import Asteroid from '~/assets/icons/asteroid.svg';
import Price from '../components/Trial/Price';
import Info from '../components/Trial/Info';
import PaymentModal from '../components/Modals/PaymentModal';
import Button from '../components/UI/Button';

export default Vue.extend({
  name: 'LightLayout',
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
    LogoLight,
    Asteroid,
  },
})
</script>

<style lang="scss" scoped>
  .holder {
    background-image: url('~assets/images/bg_light.png');
  }
  main {
    padding: 24px 0;
    @media screen and (min-width: 768px) {
      padding: 65px 0;
    }
    .plan {
      max-width: 474px;
      margin-right: 24px;
      &__title {
        font-size: 32px;
        font-style: normal;
        font-weight: 800;
        line-height: 120%;
        @media screen and (min-width: 768px) {
          font-size: 48px;
        }
      }
      &__text {
        font-size: 24px;
        font-weight: 600;
        max-width: 375px;
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
      max-width: 474px;
      background: $white;
      @media screen and (min-width: 768px) {
        border: 1px solid $grey;
        border-radius: 24px;
        box-shadow: 0 4px 4px 0 rgba(0, 0, 0, 0.06);
      }
      &__image {
        top: -56px;
        right: 18px;
      }
    }
  }
</style>
