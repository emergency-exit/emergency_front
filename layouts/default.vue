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
        v-if="myInfo === null"
        text
        nuxt
        to="/login"
        :style="{ display: 'flex', alignItems: 'center' }"
      >
        로그인
      </v-btn>
      <my-info v-if="myInfo" :my-info="myInfo" />
    </v-app-bar>

    <v-main>
      <!-- Provides the application the proper gutter -->
      <v-container fluid>
        <!-- If using vue-router -->
        <router-view />
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
import MyInfo from '../components/MyInfo';
export default {
  components: {MyInfo},
  data() {
    return {
      dialog: false
    };
  },
  computed: {
    myInfo() {
      return this.$store.state.members.myInfo
    }
  },
  beforeCreate() {
    this.$store.dispatch("members/getMyInfo");
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
