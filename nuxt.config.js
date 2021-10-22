import colors from "vuetify/lib/util/colors";

export default {
  eslint: {
    fix: true,
  },
  head: {
    title: "potato-velog",
    titleTemplate: "EmergencyExit | %s",
  },
  modules: ["@nuxtjs/vuetify", "@nuxtjs/axios"],
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    "@nuxtjs/eslint-module",
  ],
  plugin: [],
  axios: {
    baseURL: "http://www.cavel-api.ga",
    // browserBaseURL: "http://localhost:8080",
    https: false,
  },
  server: { host: "0.0.0.0" },
  loading: {
    color: colors.grey.darken4,
    height: "5px",
  },
  vuetify: {
    // customVariables: ['~/assets/variables.scss'],
    theme: {
      dark: false,
      light: true,
      themes: {
        light: {
          primary: colors.grey.darken4,
        },
        dark: {
          primary: colors.grey.darken4,
          accent: colors.grey.darken3,
          secondary: colors.amber.darken3,
          info: colors.teal.lighten1,
          warning: colors.amber.base,
          error: colors.deepOrange.accent4,
          success: colors.green.accent3,
        },
      },
    },
  },
  // auth: {
  //   strategies: {
  //     local: {
  //       endpoints: {
  //         login: {
  //           url: "/login",
  //           method: "post",
  //           propertyName: false
  //         },
  //         user: { url: "/api/v1/myInfo", method: "get", propertyName: false }
  //       }
  //     }
  //   }
  // }
};
