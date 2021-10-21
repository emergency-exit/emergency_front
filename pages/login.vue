<template>
  <v-container bg fill-height fill-width>
    <v-card  align-center align="center">
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
          <v-btn color="green" type="submit" :disabled="!valid">
            로그인
          </v-btn>
          <v-btn nuxt to="/signup">
            회원가입
          </v-btn>
        </v-container>
      </v-form>
    </v-card>
  </v-container>
</template>

<script>
export default {
  middleware: 'anonymous',
  data() {
    return {
      valid: false,
      email: '',
      password: '',
      emailRules: [
        v => !!v || '이메일은 필수',
        v => /.+@.+/.test(v) || '이메일이 유효하지 않습니다.',
      ],
      passwordRules: [
        v => !!v || '비밀번호 필수',
      ]
    }
  },
  methods: {
    onSubmitForm() {
      if (this.$refs.form.validate()) {
        this.$store.dispatch("members/login", {
          email: this.email,
          password: this.password
        })
      }
    }
  }
}
</script>

<style scoped>

</style>