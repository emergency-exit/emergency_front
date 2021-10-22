<template>
  <v-app-bar app absolute color="white" elevate-on-scroll>
    <v-btn icon>
      <v-img
        class="ml-3 rounded-lg"
        :src="require('@/assets/images/EmergencyExit.svg')"
        height="50"
        width="50"
        contain
        rounded
      >
      </v-img>
    </v-btn>
    <nuxt-link to="/">
      <v-app-bar-title>Emergency Exit</v-app-bar-title>
    </nuxt-link>
    <v-spacer />
    <v-text-field
      label="검색"
      hide-details
      prepend-icon="mdi-magify"
      :style="{ display: 'flex', alignItems: 'center' }"
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
  computed: {
    token() {
      return this.$store.state.member.token;
    },
  },
  beforeCreate() {
    this.$store.dispatch("member/getMyInfo");
  },
};
</script>

<style></style>
