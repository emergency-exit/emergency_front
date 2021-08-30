<template>
  <v-container>
    <div>
      <v-row>
        <v-col v-for="i in mainPosts" :key="i.boardId" cols="12" xs="12" md="3">
          <post-card :post="i" />
        </v-col>
      </v-row>
    </div>
  </v-container>
</template>

<script>
import PostCard from "../components/PostCard";

export default {
  components: {PostCard},
  data() {
    return {}
  },
  fetch({store}) {
    return store.dispatch('posts/loadPosts');
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
  mounted() {
    window.addEventListener("scroll", this.onScroll);
  },
  beforeDestroy() {
    window.removeEventListener("scroll", this.onScroll);
  },
  methods: {
    onScroll() {
      if(window.scrollY + document.documentElement.clientHeight > document.documentElement.scrollHeight - 300) {
        if (this.hasMorePost) {
          this.$store.dispatch('posts/loadPosts');
        }
      }
    }
  }
}
</script>

<style scoped>

</style>