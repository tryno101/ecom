<template>
  <div class="slug body">
    <!-- <div> -->
    <section class="container productCarousel" width="80%">
      <el-carousel :interval="4000" type="card" height="460px">
        <el-carousel-item>
          <div
            class="productImage"
            :style="{
              backgroundImage: `url(${backendurl + '/public/uploads/' + product.image})`
            }"
          />
        </el-carousel-item>
      </el-carousel>
    </section>

    <section class="container productOverview" width="80%">
      <div class="row">
        <div class="col-md-8">
          <div id="productTitle">
            <h1 class="headTitle">
              {{ product.title }}
            </h1>
          </div>
          <div>
            <h3>Package options</h3>
            <div id="nav-scroller" class="packageContainer">
              <div id="buyNow" class="activityPriceGuarantee">
                <span>Best Price Guarantee 2</span>
                <font-awesome-icon icon="info-circle" class="infoIcon" />
              </div>
              <div class="productPrice">
                <span class="salePrice">RM {{ product.price }}</span>
              </div>
              <div v-if="getuserjwt" class="booking">
                <button class="btn">
                  Buy Now
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  async asyncData ({ $axios, params, error, store }) {
    const response = await $axios.$get(
      process.env.backendurl + '/api/v1/items/' + params.id
    )
    return {
      product: response.data
    }
  },
  data () {
    return {
      items: [],
      frontendurl: process.env.frontendurl,
      backendurl: process.env.backendurl
    }
  },
  computed: {
    getuserjwt () {
      return this.$store.getters['auth/getuserjwt']
    }
  }
}
</script>

<style scoped>
a.nav-link:focus  {
  color: rgba(46, 190, 201, 1);
}
h2 {
    color: yellow !important;
}
.el-input {
  width: 100%;
}
.spac {
  justify-content:space-between;
  display: flex;
  margin-bottom: 11px;
}
.good {
  display: none;
  /* visibility: collapse;
  opacity: 0;
  display: inline; */
}
/* Variables */
.productCarousel {
  margin-top: 25px;
}
input {
  border-radius: 6px;
  margin-bottom: 6px;
  padding: 12px;
  border: 1px solid rgba(50, 50, 93, 0.1);
  height: 44px;
  font-size: 16px;
  width: 100%;
  background: white;
}
.hidden {
  display: none;
}

/* Buttons and links */
#submit-button {
  background: #5469d4;
  font-family: Arial, sans-serif;
  color: #ffffff;
  border-radius: 4px;
  border: 0;
  padding: 12px 16px;
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
  display: block;
  transition: all 0.2s ease;
  box-shadow: 0px 4px 5.5px 0px rgba(0, 0, 0, 0.07);
  width: 100%;
}
#submit-button:hover {
  filter: contrast(115%);
}
#submit-button:disabled {
  opacity: 0.5;
  cursor: default;
}

.stick {
  position: fixed !important;
  bottom: 0;
  width: 100%;
  left: 0%;
  background: rgb(255, 255, 255);
  box-shadow: 0 -1px 8px 0 rgb(0 0 0 / 11%);
  /* border-top: 1px solid #ccc; */
  height: 70px;
  /* align-items: center; */
  z-index: 99;
/* visibility: visible;
opacity: 1; */
display: block;
}

a:active {
  color: rgba(46, 190, 201, 1);
}
.productBread {
  padding-top: 25px;
  padding-bottom: 20px;
}
.productImage {
  height: 100%;
  position: relative;
  background-position: 50%;
  background-size: cover;
  border-radius: 10px;
}
.video {
  height: 100%;
  width: 100%;
}
.productOverview {
  padding-top: 20px;
}
.productHeader {
  display: flex;
  flex-direction: column;
  position: sticky;
  top: 380px;
}
hr {
  margin: 20px 0;
}
.cityIcon {
  color: rgba(46, 190, 201, 1);
}
.productCity {
  margin-bottom: 3px;
  color: rgb(155, 171, 180);
  font-size: 14px;
}
#productTitle {
  margin-bottom: 25px;
}
#productTitle h1.headTitle {
  font-size: 26px;
  line-height: 1.7;
  letter-spacing: 0.5px;
}
.packageContainer {
  border: 1px solid rgb(234, 234, 234);
  padding: 12px 20px;
}
.activityPriceGuarantee {
  color: rgb(155, 171, 180);
}
.productPrice {
  /* margin-bottom: 24px; */
  margin-bottom: 7px;
}
.salePrice {
  font-size: 24px;
  line-height: 32px;
}

.tabs-fixed-top {
  width: 100%;
  position: fixed;
  top: 40px;
  left: 0;
  z-index: 20;
  padding-left: 24px;
  background-color: #fff;
  border-bottom: 2px solid #e4e7ed;
}
.el-carousel /deep/ .el-carousel__item h3 {
  color: #475669;
  font-size: 14px;
  opacity: 0.75;
  line-height: 200px;
  margin: 0;
}
</style>
