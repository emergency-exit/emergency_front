export const state = () => ({
  token: null
});

export const mutations = {
  getMyInfo(state, payload) {
    state.token = payload;
  }
};

export const actions = {
  async signUp({ commit }, payload) {
    try {
      await this.$axios.post("/signup", {
        email: payload.email,
        password: payload.password,
        name: payload.name
      });
      this.$router.push({
        path: "/"
      });
    } catch (err) {
      console.error(err);
    }
  },
  async login({ commit, dispatch }, payload) {
    try {
      const data = await this.$axios.post("/login", {
        email: payload.email,
        password: payload.password
      });
      sessionStorage.setItem("token", data.data.data);
      dispatch("getMyInfo");
    } catch (err) {
      console.error(err);
      alert("로그인에 실패했습니다.");
    }
  },
  async getMyInfo({ commit }) {
    try {
      const res = await this.$axios.get("/api/v1/myInfo", {
        headers: {
          Authorization: process.server ? null : sessionStorage.getItem("token")
        }
      });
      commit("getMyInfo", {
        data: res.data
      });
      this.$router.push({
        path: "/"
      });
    } catch (err) {
      console.error(err);
    }
  }
};
