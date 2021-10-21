<template>
  <v-app>
    <v-app-bar app absolute
               color="white"
               elevate-on-scroll
    >
      <img class="logo" src="@/assets/images/EmergencyExit.svg"><nuxt-link to="/"><v-app-bar-title>Emergency Exit</v-app-bar-title></nuxt-link>
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

    <v-main>
      <!-- Provides the application the proper gutter -->
      <v-container fluid>
        <!-- If using vue-router -->
        <router-view />
      </v-container>
    </v-main>

    <UIFooter/>
    
  </v-app>
</template>

<script>
import MyInfo from '../components/MyInfo';
import UIFooter from '../components/UI/UIFooter';

export default {
  components: {MyInfo,UIFooter},
  data() {
    return {
      dialog: false
    };
  },
  computed: {
    token() {
      return this.$store.state.member.token
    }
  },
  beforeCreate() {
    this.$store.dispatch("member/getMyInfo");
  },
  methods: {},
};
</script>

<style scoped>
.logo {
  border-radius: 0.5rem;
  width: inherit;
  height: inherit;
  padding: 5px;
}
</style>
