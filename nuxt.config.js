export default {
  eslint: {
    fix: true,
  },
  head: {
    title: "potato-velog",
  },
  modules: ["@nuxtjs/vuetify", "@nuxtjs/axios"],
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    "@nuxtjs/eslint-module",
  ],
  plugin: [],
  vuetify: {},
  axios: {
    baseURL: "http://www.cavel-api.ga",
    // browserBaseURL: "http://localhost:8080",
    https: false,
  },
  server: { host: "0.0.0.0" },
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
