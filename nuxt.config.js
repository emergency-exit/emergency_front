module.exports = {
  buildModules: ['@nuxtjs/tailwindcss'],
  eslint: {
    fix: true
  },
  head: {
    title: "potato-velog"
  },
  modules: ["@nuxtjs/vuetify", "@nuxtjs/axios"],
  plugin: [],
  vuetify: {},
  axios: {
    baseURL: "http://cavel-api.ga",
    // browserBaseURL: "http://localhost:8080",
    https: false
  },
  auth: {
    strategies: {
      local: {
        endpoints: {
          login: {
            url: "/login",
            method: "post",
            propertyName: false
          },
          user: { url: "/api/v1/myInfo", method: "get", propertyName: false }
        }
      }
    }
  }
};
