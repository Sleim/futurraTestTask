<template lang="pug">
  component(:is="layout")
</template>

<script>
import Vue from 'vue'
import LightLayout from '../layouts/light.vue';
import DarkLayout from '../layouts/dark.vue';

export default Vue.extend({
  name: 'IndexPage',
  data() {
    return {
      showModal: false,
      selectValue: false,
      layout: 'LightLayout'
    }
  },
  components: {
    LightLayout,
    DarkLayout
  },
  created() {
    const testParam = this.$route.query.abtest
    const savedTestLayout = localStorage.getItem('testLayout');
    const randomLayout = Math.random() < 0.5 ? 'LightLayout' : 'DarkLayout';
    if (!testParam && !savedTestLayout) return;
    switch (testParam) {
      case ('test'):
        this.layout = savedTestLayout ? savedTestLayout : randomLayout;
        localStorage.setItem('testLayout', this.layout)
        break;
      case ('var1'):
        this.layout = 'LightLayout'
        break;
      case ('var2'):
        this.layout = 'DarkLayout'
        break;
    }
  }
})
</script>
