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
  }
};
