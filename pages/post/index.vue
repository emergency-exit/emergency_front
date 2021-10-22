<template>
  <div />
</template>

<script>
// import axios from "axios";

export default {
  async asyncData({ params, $axios }) {
    console.log(await $axios.get("/ping").data);
  },
};
</script>

<style></style>
