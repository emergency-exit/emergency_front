<template>
  <v-container>
    <div>
      <post-card v-for="i in mainPosts" :key="i" cols="12" xs="12" md="3" :post="i" />
    </div>
  </v-container>
</template>

<script>
import PostCard from "../components/PostCard";
export default {
  components: {PostCard},
  data() {
    return {
      
    }
  },
  fetch({store}) {
    return store.dispatch('posts/loadPosts', {reset: true});
  },
  computed: {
    myInfo() {
      return this.$store.state.members.myInfo
    },
    mainPosts() {
      return this.$store.state.posts.mainPosts;
    },
    hasMorePost() {
      return this.$store.state.posts.hasMorePost;
    }
  },
}
</script>

<style scoped>

</style>