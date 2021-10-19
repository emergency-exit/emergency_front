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
    baseURL: "http://ec2-3-38-124-11.ap-northeast-2.compute.amazonaws.com",
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
