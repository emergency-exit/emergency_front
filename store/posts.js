import throttle from "lodash.throttle";
export const state = () => ({
  mainPosts: [],
  hasMorePost: true
});

export const mutations = {
  loadPosts(state, payload) {
    state.mainPosts = state.mainPosts.concat(payload);
    state.hasMorePost = payload.length === 5;
  }
};

export const actions = {
  loadPosts: throttle(async function({ commit, state }, payload) {
    try {
      let lastPost = state.mainPosts[state.mainPosts.length - 1];
      if (state.mainPosts.length === 0) {
        lastPost = { boardId: 0 };
      }
      const res = await this.$axios.get(
        `/board/list?lastBoardId=${lastPost &&
          lastPost.boardId}&size=8&period=LATEST`
      );
      console.log(res.data.data);
      commit("loadPosts", res.data.data);
    } catch (err) {
      console.error(err);
    }
  }, 2000)
};
