<template>
  <div />
</template>

<script>
import axios from "axios";

export default {
  async asyncData({ params, $http }) {
    console.log(
      await axios.get(
        "http://ec2-3-38-124-11.ap-northeast-2.compute.amazonaws.com/ping"
      ).data
    );
  },
};
</script>

<style></style>
