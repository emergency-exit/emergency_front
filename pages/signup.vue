<template>
  <v-row justify="space-around">
    <v-card justify="space-around" min-width="400">
      <v-card-title>회원가입</v-card-title>
      <v-form ref="form" v-model="valid" @submit.prevent="onSubmitForm">
        <v-container>
          <v-text-field
            v-model="email"
            label="이메일"
            type="email"
            :rules="emailRules"
            required
          />
          <v-text-field
            v-model="password"
            label="비밀번호"
            type="password"
            :rules="passwordRules"
            required
          />
          <v-text-field
            v-model="passwordCheck"
            label="비밀번호 확인"
            type="password"
            :rules="passwordCheckRules"
            required
          />
          <v-text-field
            v-model="name"
            label="이름"
            type="name"
            :rules="nameRules"
            required
          />
          <v-checkbox
            v-model="terms"
            label="ㄱㄱ?"
            :rules="[(v) => !!v || '약관에 동의하세요']"
            required
          />
        </v-container>
        <v-divider class="mt-12"></v-divider>
        <v-card-actions>
          <v-btn type="submit" color="primary" text>회원가입</v-btn>
        </v-card-actions>
      </v-form>
    </v-card>
  </v-row>
</template>

<script>
export default {
  middleware: "anonymous",
  data() {
    return {
      valid: false,
      email: "",
      password: "",
      passwordCheck: "",
      name: "",
      terms: false,
      emailRules: [
        (v) => !!v || "이메일은 필수입니다.",
        (v) => /.+@.+/.test(v) || "이메일이 유효하지 않습니다.",
      ],
      nameRules: [(v) => !!v || "이름은 필수입니다."],
      passwordRules: [(v) => !!v || "비밀번호는 필수입니다."],
      passwordCheckRules: [
        (v) => !!v || "비밀번호는 필수입니다.",
        (v) => v === this.password || "비밀번호가 일치하지 않습니다.",
      ],
    };
  },
  methods: {
    onSubmitForm() {
      // valid가 true가 됨
      if (this.$refs.form.validate()) {
        this.$store.dispatch("members/signUp", {
          email: this.email,
          password: this.password,
          name: this.name,
        });
      }
    },
  },
};
</script>

<style></style>
