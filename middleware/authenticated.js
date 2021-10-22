export default function ({ store, redirect }) {
  if (!store.state.member.token) {
    redirect("/login");
  } else {
    this.$axios.setToken(store.member.token);
  }
}
