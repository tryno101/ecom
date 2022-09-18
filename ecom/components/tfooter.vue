<template>
  <div id="footer">
    <div class="container">
      <div class="row">
        <div class="col-md-4 text-left newsletter">
          <h4>&#35; Tmooz</h4>
          <h4> {{ $t('our newsletter') }} </h4>
          <p> {{ $t('newsletter-desc') }} </p>

          <!-- <div>
            <div class="form-group">
              <b-form-input v-model="email" required type="email" class="form-control" :placeholder=" $t('form-email') " />
            </div>
            <div class="form-group">
              <select v-model="state" class="form-control" size="sm">
                <option value="all">
                  {{ $t('all state') }}
                </option>
              </select>
            </div>

            <button class="btn btn-block" type="submit" @click="subscribe">
              {{ $t('subscribe') }}
            </button>
          </div>end of form group -->
        </div>

        <div class="col-md-4 text-left info">
          <h4> {{ $t('information') }} </h4>
        </div>

        <div class="col-md-4 text-left contact">
          <h4> {{ $t('get in touch') }} </h4>
          <p>Whatsapp : +60 11-7239 1738</p>
          <p> {{ $t('email') }} : <a href="mailto:support@buyonbids.com">support@buyonbids.com</a></p>
          <div>
            <nuxt-link :to=" localePath('contact') ">
              {{ $t('contact us page') }}
            </nuxt-link>
          </div>
        </div>
      </div><!--end of row-->
      <hr>
      <div class="col-md-12 text-center">
        <div class="copyrights">
          &#169; {{ new Date().getFullYear() }} Zero Tech. {{ $t('copyright-desc') }}
        </div>
      </div>
    </div>
  </div><!--end of footer-->
</template>

<script>
export default {
  data () {
    return {
      frontendurl: process.env.frontendurl,
      backendurl: process.env.backendurl,
      email: '',
      state: 'all',
      submitted: false
    }
  },
  methods: {
    async subscribe () {
      // eslint-disable-next-line no-unused-vars
      const response = await this.$axios.$post(process.env.backendurl + '/newsletters', {
        email: this.email,
        state: this.state
      })
        .then((r) => {
          // eslint-disable-next-line no-console
          console.log(r)
          this.submitted = true
          window.location = process.env.frontendurl + '/subscribe-confirm'
        })
        .catch((err) => {
          // eslint-disable-next-line no-console
          console.log(err)
          alert('Error!')
          window.location = process.env.frontendurl + '/'
        })
    }
  }
}
</script>

<style>
#footer {
background-color: #444;
padding-top: 5px;
border: 1px solid rgba(245,245,245);
}
#footer h4 {
/* border-bottom: 1px solid #666; */
line-height: 45px;
color: hsla(0,0%,100%,.4);
}
#footer a {
color: #f4f4f4;
}
#footer a:hover {
color: hsla(0,0%,100%,.4);
text-decoration-line: none;
}
#footer div.copyrights {
padding-bottom: 12px;
    color: #aaa!important;
}
#footer p{
margin-bottom: 8px;
}
#footer .form-group {
margin-bottom: 8px;
}
hr {
   border-bottom: 1px solid #666;
}
</style>
