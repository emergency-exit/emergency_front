export const state = () => ({
  hello: "posts",
  mainPosts: []
});

export const mutations = {
  BYE(state) {
    state.hello = "bye";
  },
  addMainPost(state, payload) {
    state.mainPosts.unshift(payload);
  },
  removeMainPost(state, payload) {
    const index = state.mainPosts.findIndex(v => v.id === payload.id);
    state.mainPosts.splice(index, 1);
  },
  addComment(state, payload) {
    const index = state.mainPosts.findIndex(v => v.id === payload.postId);
    state.mainPosts[index].Comments.unshift(payload);
  }
};

export const actions = {
  add({ commit }, payload) {
    commit("addMainPost", payload); // index에 addMainPost가 있으면 index꺼 불러옴 {root: true}
  },
  remove({ commit }, payload) {
    commit("removeMainPost", payload);
  },
  addComment({ commit }, payload) {
    commit("addComment", payload);
  }
};
