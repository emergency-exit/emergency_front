<template>
  <v-card>
    <v-img>
      <nuxt-link :to="postPath">
        <v-card-title>{{ post.title }}</v-card-title>
      </nuxt-link>
    </v-img>
    <v-card-subtitle>
      {{ post.title }}
    </v-card-subtitle>
    <v-card-text>
      <div>{{ post.content }}</div>
    </v-card-text>
    <v-card-actions>
      <v-spacer />

      <v-btn icon>
        <v-icon>mdi-heart</v-icon>
      </v-btn>

      <v-btn icon>
        <v-icon>mdi-bookmark</v-icon>
      </v-btn>

      <v-btn icon>
        <v-icon>mdi-share-variant</v-icon>
      </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
  props: {
    post: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {};
  },
  computed: {
    postPath() {
      return `/post/${this.post.id}`;
    },
  },
};
</script>

<style scoped></style>
