<template>
  <div>
    <v-row>
      <v-col cols="12" xs="12" md="3" v-for="i in this.example" :key="i">
        <post-card />
      </v-col>
    </v-row>

  </div>
</template>

<script>
import PostCard from "../components/PostCard";
export default {
  components: {PostCard},
  data() {
    return {
      example: ["1", "2", "3", "4", "5"]
    }
  }
}
</script>

<style scoped>

</style>