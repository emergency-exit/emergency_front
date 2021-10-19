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
import axios from 'axios';

export default {
  components: {PostCard},
  data() {
    return {
      mockUp : [{
        title:"안녕1",
        content:"헬로1"
      },{
        title:"안녕2",
        content:"헬로2"
      },{
        title:"안녕3",
        content:"헬로3"
      },{
        title:"안녕4",
        content:"헬로4"
      },{
        title:"안녕5",
        content:"헬로5"
      },{
        title:"안녕6",
        content:"헬로6"
      },]
    }
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
  async created() {
    console.log(await axios.get("http://ec2-3-38-124-11.ap-northeast-2.compute.amazonaws.com/ping"));
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