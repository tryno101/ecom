<template>
  <div>
    <div class="loginform shadow">
      <div class="container">
        <div class="title text-center">
          <h1>{{ $t("sign in") }}</h1>
          <p>
            <span>{{ $t("to continue with") }}</span>
            <span class="brandName">Ecom.com</span>
          </p>
        </div>

        <el-form
          ref="validateForm"
          :model="validateForm"
          label-width="120px"
          label-position="top"
        >
          <el-form-item prop="email" :label="$t('email')" class="formLabel">
            <el-input
              v-model="validateForm.email"
              :placeholder="$t('please input your email address')"
            />
          </el-form-item>

          <el-form-item
            prop="password"
            :label="$t('password')"
            class="formLabel"
          >
            <el-input
              v-model="validateForm.password"
              :placeholder="$t('please input your password')"
              type="password"
              autocomplete="off"
              show-password
            />
          </el-form-item>

          <el-button class="btn btn-pri btn-block" @click="login">
            {{ $t("log in") }}
          </el-button>
        </el-form>
      </div>
    </div>
  </div>
</template>

<script>
import { mapMutations } from 'vuex'

export default {
  layout: 'none',
  data () {
    return {
      frontendurl: process.env.frontendurl,
      backendurl: process.env.backendurl,
      validateForm: {
        email: '',
        password: ''
      }
    }
  },
  methods: {
    ...mapMutations({
      setToken: 'auth/setToken'
    }),
    async login () {
      // eslint-disable-next-line no-unused-vars
      const response = await this.$axios
        .$post(process.env.backendurl + '/api/v1/members/login', {
          email: this.validateForm.email,
          password: this.validateForm.password
        })
        .then((res) => {
          this.setToken(res.token)
          this.$message.success({
            duration: 800,
            message: 'Login Successfully!'
          })
          this.$router.push(this.localePath('index'))
        })
        .catch((error) => {
          this.$message.error(error.response.data.message)
        })
    }
  }
}
</script>
