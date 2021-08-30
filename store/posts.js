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
  async loadPosts({ commit, state }) {
    try {
      const res = await this.$axios.get(
        `/board/list?lastBoardId=10&size=2&period=LATEST`
      );
      commit("loadPosts", res.data.data);
    } catch (err) {
      console.error(err);
      alert("게시글 불러오는데 실패했습니다.");
    }
  }
};
