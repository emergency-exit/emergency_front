import Cookie from "js-cookie";

export const state = () => ({
  myInfo: null
});

export const mutations = {
  getMyInfo(state, payload) {
    state.myInfo = payload;
  }
};

export const actions = {
  signUp({ commit }, payload) {
    this.$axios
      .post("/signup", {
        email: payload.email,
        password: payload.password,
        name: payload.name
      })
      .then(data => {
        this.$router.push({
          path: "/"
        });
      })
      .catch(error => {
        console.error(error);
        alert("회원가입 실패");
      });
  },
  login({ commit, dispatch }, payload) {
    this.$axios
      .post("/login", {
        email: payload.email,
        password: payload.password
      })
      .then(data => {
        Cookie.set("token", data.data.data);
        dispatch("getMyInfo");
      })
      .catch(err => {
        console.error(err);
        alert("로그인에 실패했습니다.");
      });
  },
  async getMyInfo({ commit }) {
    console.log("cookie", Cookie.get("token"));
    try {
      const res = await this.$axios.get("/api/v1/myInfo", {
        headers: {
          Authorization: Cookie.get("token")
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
