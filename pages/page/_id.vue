<template>
  <h1>{{id}}</h1>
</template>

<script>
export default {
    async asyncData({ params }) {
    return { id : params.id }
  },
}
</script>

<style>

</style>