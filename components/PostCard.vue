<template>
  <div>
    <v-container>
      <v-card>
        <v-img>
          <v-card-title>card</v-card-title>
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
    </v-container>
  </div>
</template>

<script>
export default {
  props: {
    post: {
      type: Object,
      required: true,
    }
  },
  data() {
    return {

    }
  }
}
</script>

<style scoped>

</style>