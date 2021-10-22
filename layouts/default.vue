<template>
  <v-app app>
    <UIHeader app />
    <v-main app>
      <!-- Provides the application the proper gutter -->
      <v-container fluid fill-height>
        <!-- If using vue-router -->
        <router-view />
      </v-container>
    </v-main>

    <UIFooter app />
  </v-app>
</template>

<script>
import UIFooter from "../components/UI/UIFooter";
import UIHeader from "../components/UI/UIHeader";

export default {
  components: { UIFooter, UIHeader },
  data() {
    return {
      dialog: false,
    };
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
