<template>
  <v-app>
    <nav>
      <v-toolbar light>
        <v-toolbar-title>
          <nuxt-link to="/">velog?이름 추천좀</nuxt-link>
        </v-toolbar-title>
        <v-spacer />
        <v-toolbar-items>
          <v-text-field
            label="검색"
            hide-details
            prepend-icon="mdi-magify"
            :style="{ display: 'flex', alignItems: 'center' }"
          />
          <v-btn
            text
            nuxt
            to="/login"
            :style="{ display: 'flex', alignItems: 'center' }"
          >
            <div>로그인</div>
          </v-btn>
          <!--          <v-dialog v-model="dialog" width="600px" >-->
          <!--            <template v-slot:activator="{on, attr}">-->
          <!--              <v-btn text :style="{display: 'flex', alignItems: 'center'}">-->
          <!--                <div>로그인</div>-->
          <!--              </v-btn>-->
          <!--            </template>-->
          <!--            <v-card>-->
          <!--              <v-card-title>-->
          <!--                <span class="text-h5">Use Google's location service?</span>-->
          <!--              </v-card-title>-->
          <!--              <v-card-text>-->
          <!--                ㄱㄱ-->
          <!--              </v-card-text>-->
          <!--              <v-card-actions>-->
          <!--                <v-spacer></v-spacer>-->
          <!--                <v-btn-->
          <!--                    color="green darken-1"-->
          <!--                    text-->
          <!--                    @click="dialog = false"-->
          <!--                >-->
          <!--                  Disagree-->
          <!--                </v-btn>-->
          <!--                <v-btn-->
          <!--                    color="green darken-1"-->
          <!--                    text-->
          <!--                    @click="dialog = false"-->
          <!--                >-->
          <!--                  Agree-->
          <!--                </v-btn>-->
          <!--              </v-card-actions>-->
          <!--            </v-card>-->
          <!--          </v-dialog>-->
        </v-toolbar-items>
      </v-toolbar>
      <v-container>
        <nuxt />
      </v-container>
    </nav>
  </v-app>
</template>

<script>
export default {
  data() {
    return {
      dialog: false
    };
  },
  methods: {}
};
</script>

<style scoped></style>
