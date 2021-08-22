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
        console.log(data);
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
        console.log(data);
        console.log(data.data);
        localStorage.setItem("token", data.data.data);
        dispatch("getMyInfo");
      })
      .catch(err => {
        console.error(err);
        alert("로그인에 실패했습니다.");
      });
  },
  getMyInfo({ commit }) {
    this.$axios
      .get("/api/v1/myInfo", {
        headers: {
          Authorization: localStorage.getItem("token")
        }
      })
      .then(data => {
        console.log(data);
        commit("getMyInfo", data.data.data);
        this.$router.push({
          path: "/"
        });
      })
      .catch(err => {
        console.error(err);
      });
  }
};
