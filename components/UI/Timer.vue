<template lang="pug">
  .timer.position-relative(
    :class="{ 'flickering': 0 < countDown && countDown < 10, 'isDark': isDark }"
    )
    .timer__info.position-relative
      .timer__count 0{{ minutesLeft }}:{{ secondsLeft > 9 ? secondsLeft : `0${secondsLeft}` }}
    .timer__overflow.position-absolute(
      :style="{ 'left': `-${progressLine}%` }"
    )
</template>

<script>
export default {
  name: 'Timer',
  props: {
    count: {
      type: Number,
      required: true,
    },
    isDark: {
      type: Boolean,
      required: false,
    },
  },
  data() {
    return {
      countDown: 0,
      minutes: 0,
      seconds: 0,
    }
  },
  mounted() {
    this.countDown = this.count
    this.startTimer()
  },
  computed: {
    progressLine() {
      return 100 - this.countDown * 100 / 180;
    },
    minutesLeft() {
      return Math.floor(this.countDown / 60)
    },
    secondsLeft() {
      return Math.floor(this.countDown % 60)
    }
  },
  methods: {
    startTimer() {
      if (this.countDown > 0) {
        setTimeout(() => {
          this.countDown -= 1
          this.startTimer();
          localStorage.setItem(this.isDark
            ? 'countdownDarkLeft'
            : 'countdownLightLeft'
            , this.countDown);
        }, 1000)
      } else {
        this.$emit('countdownEnd')
      }
    }
  },
}
</script>

<style lang="scss" scoped>
  .timer {
    width: 110px;
    height: 47px;
    background: $black;
    color: $white;
    text-align: center;
    font-size: 24px;
    font-style: normal;
    font-weight: 600;
    line-height: 140%;
    border-radius: 12px;
    padding: 8px 10px;
    overflow: hidden;
    @media screen and (min-width: 768px) {
      width: 160px;
      height: 60px;
      max-width: 160px;
      padding: 13px 10px;
    }
    &.flickering {
      animation: flicker 1s linear infinite;
    }
    &__info {
      z-index: 2;
    }
    &__overflow {
      z-index: 1;
      width: 100%;
      top: 0;
      left: 0;
      bottom: 0;
      background: $green;
      border-radius: 12px;
      box-shadow: 0 0 1px 0 $green;
      transition: left 1s ease-in-out;
    }
    @keyframes flicker {
      0% {
        box-shadow: 0 0 0 0 $red;
      }
      100% {
        box-shadow: 0 0 3px 3px $red;
      }
    }
  }
  .isDark {
    .timer {
      &__overflow {
        background: $blue;
        box-shadow: 0 0 1px 0 $blue;
      }
    }
  }
</style>
