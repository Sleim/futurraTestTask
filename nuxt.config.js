export default {
  // Disable server-side rendering: https://go.nuxtjs.dev/ssr-mode
  ssr: false,

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'testTask',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1, shrink-to-fit=no' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '@/assets/fonts/stylesheet.css',
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    '~/plugins/bootstrap.ts',
    '~/plugins/mask.ts',
    '~/plugins/vee-validate.ts',
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: false,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/typescript
    '@nuxt/typescript-build'
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/bootstrap
    'bootstrap-vue/nuxt',
    '@nuxtjs/style-resources'
  ],
  styleResources: {
    scss: ['./assets/css/*.scss']
  },
  files: ['globals.d.ts'],
  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    extend: (config) => {
      const svgRule = config.module.rules.find(rule => rule.test.test('.svg'));

      svgRule.test = /\.(png|jpe?g|gif|webp)$/;

      config.module.rules.push({
        test: /\.svg$/,
        use: [
          'babel-loader',
          'vue-svg-loader',
        ],
      });
    },
  }
}
