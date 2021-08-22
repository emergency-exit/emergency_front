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
            text
            nuxt
            to="/login"
            :style="{ display: 'flex', alignItems: 'center' }"
          >
            <div v-if="!myInfo">로그인</div>
            <div v-else>로그아웃</div>
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
export default {
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
  methods: {}
};
</script>

<style scoped></style>
