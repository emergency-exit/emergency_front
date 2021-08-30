module.exports = {
  head: {
    title: "potato-velog"
  },
  modules: ["@nuxtjs/vuetify", "@nuxtjs/axios"],
  plugin: [],
  vuetify: {},
  axios: {
    baseURL: "http://localhost:8080",
    browserBaseURL: "http://localhost:8080",
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
