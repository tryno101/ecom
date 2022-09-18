<template>
  <div>
    <theader class="header" />
    <Nuxt />
  </div>
</template>

<script>
import theader from '~/components/theader'

export default {
  components: {
    theader
  },
  data () {
  }
}
</script>

<style scoped>
.header {
padding-top: 0px;
padding-bottom: 0px;
background-color: rgba(255, 255, 255);
position: -webkit-sticky !important;
position: sticky;
width: 100%;
/* height: 6vh; */
top: 0;
z-index: 5 !important;
font-weight: bold;
font-size: 20px;
border-bottom: 1px solid rgb(234, 234, 234);
}
.footer {
    border-top: 1px solid rgb(234, 234, 234);
}
</style>
