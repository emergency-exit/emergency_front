<template>
  <v-container>
    <v-row justify="space-around">
      <v-card min-width="300" min-height="250" align="center">
        <v-card-title>로그인</v-card-title>
        <v-form ref="form" v-model="valid" @submit.prevent="onSubmitForm">
          <v-container>
            <v-text-field
              v-model="email"
              :rules="emailRules"
              label="이메일"
              type="email"
              required
            />
            <v-text-field
              v-model="password"
              :rules="passwordRules"
              label="비밀번호"
              type="password"
              required
            />
            <v-card-actions>
              <v-btn color="primary" outlined type="submit" :disabled="!valid">
                로그인
              </v-btn>
              <v-btn nuxt to="/signup" outlined> 회원가입 </v-btn>
            </v-card-actions>
          </v-container>
        </v-form>
      </v-card>
    </v-row>
  </v-container>
</template>

<script>
export default {
  middleware: "anonymous",
  data() {
    return {
      valid: false,
      email: "",
      password: "",
      emailRules: [
        (v) => !!v || "이메일은 필수",
        (v) => /.+@.+/.test(v) || "이메일이 유효하지 않습니다.",
      ],
      passwordRules: [(v) => !!v || "비밀번호 필수"],
    };
  },
  methods: {
    onSubmitForm() {
      if (this.$refs.form.validate()) {
        this.$store.dispatch("members/login", {
          email: this.email,
          password: this.password,
        });
      }
    },
  },
};
</script>

<style scoped></style>
