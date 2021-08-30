<template>
  <v-app>
    <nav>
      <v-toolbar light>
        <v-toolbar-title>
          <nuxt-link to="/">velog?이름 추천좀</nuxt-link>
        </v-toolbar-title>
        <v-spacer />
        <v-toolbar-items>
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
            <div>
              로그인
            </div>
          </v-btn>
          <v-btn v-else>
            <div>
              <my-info :my-info="myInfo" />
            </div>
          </v-btn>
        </v-toolbar-items>
      </v-toolbar>
      <v-container>
        <nuxt />
      </v-container>
    </nav>
  </v-app>
</template>

<script>
import MyInfo from '../components/MyInfo';
import Cookie from "js-cookie";
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

<style scoped></style>
