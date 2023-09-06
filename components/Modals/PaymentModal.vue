<template lang="pug">
  b-modal(
    v-model="showModal"
    no-close-on-backdrop
    hide-footer
    hide-header
    :content-class="['paymentModal', isDark ? 'darkModal' : 'whiteModal']"
    centered
  )
    h2.title.text-center.mb-4 Payment method
    b-button.d-flex.align-items-center.justify-content-center.button.button-paypal.mb-3
      PayPal
      span BUY NOW
    b-button.d-flex.align-items-center.justify-content-center.button.button-google.mb-3
      GooglePay
      span PAY
    .separator.mb-3 OR
    ValidationObserver(
      v-slot="{ invalid }"
    )
      form(@submit.prevent="onSubmit")
        ValidationProvider(
          rules="required|min:19"
          v-slot="{ errors }"
          name="cardNumber"
        )
          Input.card-number(
            v-model="userInfo.cardNumber"
            v-mask="'#### #### #### ####'"
            placeholder="•••• •••• •••• ••••"
            label="Card number"
            :isDark="isDark"
            :errorMessage="errors[0]"
          )
            template(#appendIcon)
              Mastercard.ml-2
        .d-flex.justify-content-between.inputs-row
          ValidationProvider(
            rules="required"
            v-slot="{ errors }"
            name="month"
          )
            Select(
              :options="['December', 'January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November']"
              v-model="userInfo.month"
              label="Month"
              placeholder="Select"
              :isDark="isDark"
            )
          ValidationProvider(
            rules="required"
            v-slot="{ errors }"
            name="year"
          )
            Select(
              :options="['2010', '2011', '2012', '2013', '2014', '2015']"
              v-model="userInfo.year"
              label="Year"
              placeholder="Select"
              :isDark="isDark"
            )
          ValidationProvider(
            rules="required|min:3"
            v-slot="{ errors }"
            name="CVC"
          )
            Input(
              v-model="userInfo.cvc"
              v-mask="'###'"
              placeholder="•••"
              label="CVC"
              type="password"
              :isDark="isDark"
              :errorMessage="errors[0]"
            )
        Button.button-submit(
          :disabled="invalid"
          type="submit"
          :color="isDark ? 'light' : 'dark'"
        ) Submit
        b-button.button-close(@click="$emit('closeModal')") Close
</template>

<script lang="ts">
import Vue from 'vue'
import PayPal from '~/assets/icons/paypal.svg';
import GooglePay from '~/assets/icons/googlePay.svg';
import Mastercard from '~/assets/icons/mastercard.svg';
import Input from '~/components/UI/Input.vue';
import Select from '~/components/UI/Select.vue';
import Button from '~/components/UI/Button.vue';
import {ValidationObserver, ValidationProvider} from 'vee-validate';

export default Vue.extend({
  name: 'PaymentModal',
  components: {
    Input,
    Select,
    PayPal,
    GooglePay,
    Button,
    ValidationProvider,
    ValidationObserver,
    Mastercard
  },
  props: {
    showModal: {
      type: Boolean,
      required: true,
    },
    isDark: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      userInfo: {
        cardNumber: '',
        cvc: '',
        month: '',
        year: '',
      }
    }
  },
  methods: {
    onSubmit() {
      console.log(this.userInfo)
    }
  }
})
</script>

<style lang="scss" scoped>
  ::v-deep .paymentModal {
    border-radius: 12px;
    padding: 24px 16px 16px;
    .modal-body {
      padding: 0;
      .title {
        font-size: 21px;
        font-style: normal;
        font-weight: 800;
      }
      .separator {
        position: relative;
        text-align: center;
        opacity: .4;
        font-size: 12px;
        font-weight: 600;
        &:before {
          content: '';
          border-radius: 5px;
          background: $black;
          height: 2px;
          width: 45%;
          position: absolute;
          top: 50%;
          transform: translateY(-50%);
          left: 0;
          opacity: .3;
        }
        &:after {
          content: '';
          border-radius: 5px;
          background: $black;
          height: 2px;
          width: 45%;
          position: absolute;
          top: 50%;
          transform: translateY(-50%);
          right: 0;
          opacity: .3;
        }
      }
      .card-number {
        margin-bottom: 30px;
      }
      .inputs-row {
        gap: 10px;
        span {
          flex: 1;
        }
      }
    }


    .button {
      width: 100%;
      padding: 12px 24px;
      height: 56px;
      span {
        font-weight: 800;
        margin-left: 10px;
      }
      &-paypal {
        background: $yellow;
        color: $white;
        border-radius: 12px;
        width: 100%;
        border: none;
        &:hover, &:active {
          background: $yellow-light!important;
          color: $white!important;
        }
        &:focus {
          box-shadow: none!important;
        }
      }
      &-google {
        border-radius: 12px;
        color: $black;
        border: 1px solid $white-smoky;
        background: $white;
        &:hover, &:active {
          background: $black!important;
          color: $white!important;
          border: none;
        }
        &:focus {
          box-shadow: none!important;
        }
      }
      &-submit {
        max-width: 300px;
        width: 100%;
        margin: 40px auto 22px;
        display: block;
      }
      &-close {
        display: block;
        cursor: pointer;
        font-size: 16px;
        font-style: normal;
        font-weight: 600;
        line-height: 140%;
        letter-spacing: -0.36px;
        color: $black40;
        margin: 0 auto;
        background: transparent;
        border: none;
        &:focus {
          box-shadow: none!important;
        }
      }
    }

    &.darkModal {
      border-radius: 24px;
      background: $dark-blue;
      max-width: 400px;
      margin: 0 auto;
      .title {
        color: $white;
      }
      .separator {
        color: $white;
        opacity: 1;
        &:after {
          background: $white;
        }
        &:before {
          background: $white;
        }
      }
      .button {
        &-submit {
          width: 100%;
          max-width: unset;
        }
        &-close {
          color: $white;
          &:focus {
            background: $purple-blue;
          }
        }
      }
    }
  }
</style>
