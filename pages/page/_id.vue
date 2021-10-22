<template>
  <h1>{{ id }}</h1>
</template>

<script>
export default {
  asyncData({ params }) {
    return { id: params.id };
  },
};
</script>

<style></style>
