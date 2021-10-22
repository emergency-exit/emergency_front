<template>
  <v-container>
    <div>
      <v-row>
        <v-col v-for="i in mockUp" :key="i.boardId" cols="12" xs="12" md="3">
          <post-card :post="i" />
        </v-col>
      </v-row>
    </div>
  </v-container>
</template>

<script>
import PostCard from "../components/PostCard";

export default {
  components: { PostCard },
  data() {
    return {
      mockUp: [
        {
          title: "안녕1",
          content: "헬로1",
          id: 1,
        },
        {
          title: "안녕2",
          content: "헬로2",
          id: 2,
        },
        {
          title: "안녕3",
          content: "헬로3",
          id: 3,
        },
        {
          title: "안녕4",
          content: "헬로4",
          id: 4,
        },
        {
          title: "안녕5",
          content: "헬로5",
          id: 5,
        },
        {
          title: "안녕6",
          content: "헬로6",
          id: 6,
        },
      ],
    };
  },
  fetch({ store }) {
    return store.dispatch("posts/loadPosts");
  },
  computed: {
    token() {
      return this.$store.state.member.token;
    },
    mainPosts() {
      return this.$store.state.posts.mainPosts;
    },
    hasMorePost() {
      return this.$store.state.posts.hasMorePost;
    },
  },
  async created() {},
  mounted() {
    window.addEventListener("scroll", this.onScroll);
  },
  beforeDestroy() {
    window.removeEventListener("scroll", this.onScroll);
  },
  methods: {
    onScroll() {
      if (
        window.scrollY + document.documentElement.clientHeight >
        document.documentElement.scrollHeight - 300
      ) {
        if (this.hasMorePost) {
          this.$store.dispatch("posts/loadPosts");
        }
      }
    },
  },
};
</script>

<style scoped></style>
