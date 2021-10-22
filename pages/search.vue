<template>
  <h1>검색어 : {{ keyword }}</h1>
</template>

<script>
export default {
  asyncData({ query }) {
    return { keyword: query.keyword };
  },
};
</script>

<style></style>
