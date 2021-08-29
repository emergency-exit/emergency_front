export const state = () => ({
  mainPosts: [],
  hasMorePost: true
});

export const mutations = {
  loadPosts(state, payload) {
    console.log(payload);
    state.mainPosts = state.mainPosts.concat(payload);
    // state.hasMorePost = payload.length === 5;
    console.log(state.mainPosts);
  }
};

export const actions = {
  loadPosts({ commit, state }) {
    console.log("loadPosts");
    if (state.hasMorePost) {
      this.$axios
        .get(`/board/list?lastBoardId=10&size=2&period=LATEST`)
        .then(res => {
          console.log("sdf");
          console.log(res.data.data);
          commit("loadPosts", res.data.data);
        })
        .catch(err => {
          alert("게시글을 불러오는데 실패하였습니다.");
        });
      commit("loadPosts");
    }
  }
};
