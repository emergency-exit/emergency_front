<template>
  <v-app-bar app color="white" elevate-on-scroll>
    <v-img
      class="mx-2 rounded-lg"
      :src="require('@/assets/images/EmergencyExit.svg')"
      height="50"
      width="50"
      contain
      rounded
    >
    </v-img>
    <!-- <nuxt-link to="/"> -->
    <v-app-bar-title class="title">Emergency Exit</v-app-bar-title>
    <!-- </nuxt-link> -->
    <v-spacer />
    <v-text-field
      v-model="searchKeyword"
      label="검색"
      clearable
      outlined
      rounded
      dense
      hide-details
      prepend-inner-icon="mdi-magnify"
      :style="{ display: 'flex', alignItems: 'center' }"
      @keydown.enter="search"
    />
    <v-btn
      v-if="token === null"
      text
      nuxt
      to="/login"
      :style="{ display: 'flex', alignItems: 'center' }"
    >
      로그인
    </v-btn>
    <my-info v-if="token" :my-info="token" />
  </v-app-bar>
</template>

<script>
import MyInfo from "~/components/MyInfo";
export default {
  components: { MyInfo },
  data() {
    return {
      searchKeyword: "",
    };
  },
  fetch() {
    if (this.$store.state.member.token)
      this.$store.dispatch("member/getMyInfo");
  },
  computed: {
    token() {
      return this.$store.state.member.token;
    },
  },
  methods: {
    search() {
      this.$router.push({
        path: "/search",
        query: {
          keyword: this.searchKeyword,
        },
      });
    },
  },
};
</script>

<style scoped></style>
