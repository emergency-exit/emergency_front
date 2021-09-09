<template>
  <!-- <v-container> -->
  <v-row justify="center">
    <v-menu bottom min-width="200px" rounded offset-y>
      <template #activator="{on}">
        <v-btn icon x-large v-on="on">
          <v-avatar
            color="primary"
            size="46"
          >
            <span class="white--text text-h5">S</span>
          </v-avatar>
        </v-btn>
      </template>
      <v-card>
        <v-list-item-content class="justify-center">
          <div class="mx-auto text-center">
            <v-avatar
              color="brown"
            >
              <span class="white--text text-h5">S</span>
            </v-avatar>
            <h3>{{ myInfo.name }}</h3>
            <p class="text-caption mt-1">
              {{ myInfo.email }}
            </p>
            <v-divider class="my-3" />
            <v-btn
              depressed
              rounded
              text
            >
              Edit Account
            </v-btn>
            <v-divider class="my-3" />
            <v-btn
              depressed
              rounded
              text
            >
              Disconnect
            </v-btn>
          </div>
        </v-list-item-content>
      </v-card>
    </v-menu>
  </v-row>
  <!-- </v-container> -->
</template>
<script>
export default {
  props: {
    myInfo: {
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