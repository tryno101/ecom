<template>
  <div class="main">
    <section class="slider">
      <el-carousel :interval="4000" height="450px">
        <el-carousel-item v-for="item of 6" :key="item">
          <img
            height="100%"
            width="100%"
            :src="`https://placeimg.com/200/200/any?${n}`"
            :alt="item.url"
          >
        </el-carousel-item>
      </el-carousel>
    </section>

    <section class="container category" width="80%">
      <div class="col-12">
        <carousel
          :autoplay="false"
          :margin="20"
          :nav="false"
          :dots="true"
          :responsive="{
            0: { items: 4, rows: 2 },
            600: { items: 6, rows: 2 },
            1024: { items: 12, rows: 2 },
          }"
        >
          <div class="container">
            <div class="row" style="justify-content: center;">
              <div v-for="(category, index) in categories" :key="index" class="select" style="margin-left: 15px;">
                <nuxt-link
                  :to="
                    localePath({
                      path: 'products',
                      query: {categories: category.id}
                    })
                  "
                >
                  <p class="catTitle">
                    {{ category.title }}
                  </p>
                </nuxt-link>
              </div>
            </div>
          </div>
        </carousel>
      </div>
    </section>

    <section class="container productList" width="80%">
      <div class="col-12">
        <div class="homeTitle">
          <p class="titleText">
            Recommended
          </p>
        </div>

        <div class="tmz-card-swiper-item swiper-item">
          <carousel
            :autoplay="false"
            :margin="10"
            :nav="false"
            :dots="true"
            :responsive="{
              0: { items: 2 },
              600: { items: 2 },
              1024: { items: 4 },
            }"
          >
            <div
              v-for="(product, index) in products"
              :key="index"
              class="productCard"
            >
              <nuxt-link
                :to="localePath({ name: 'products-slug', params: { slug: product.slug } })"
              >
                <!--  :style="{ backgroundImage: `url(${backendurl+'/public/uploads/products/'+product.imageCover})` }" -->
                <div>
                  <img
                    class="productImage"
                    :src="
                      backendurl + '/public/uploads/products/' + product.imageCover
                    "
                  >
                </div>
                <div class="productDetails">
                  <!-- <div class="productCity">
                    <font-awesome-icon
                      fas
                      icon="map-marker-alt"
                      class="cityIcon"
                    />
                    {{ product.city }} , {{ product.country }}
                  </div> -->
                  <div class="productTitle">
                    {{ product.title }}
                  </div>
                  <!-- <div class="productPerson">
                    <span>{{ product.company }}</span> •
                    <span v-for="(guide, index) in product.guides" :key="index">{{
                      guide.name
                    }}</span>
                  </div> -->
                  <div v-if="product.ratingsQuantity !== 0" class="productRating">
                    <!-- <i v-if="product.ratingsAverage" class="fas fa-star" /> -->
                    <!-- <el-rate
                      v-model="value"
                      disabled
                      show-score
                      text-color="#ff9900"
                      score-template="{value}"
                    /> -->
                    <i class="el-icon-star-on" />
                    <span>{{ product.ratingsAverage }}</span>
                    <span>({{ product.ratingsQuantity }})</span>
                    <span v-if="product.bookingsQuantity"> •  {{ product.bookingsQuantity }} booked</span>
                  </div>
                </div>

                <div v-if="product.priceDiscount" class="productPrice">
                  <div class="calDis">
                    <span class="oriPrice">RM {{ product.price }}</span>
                    <span class="dicountPercent">18%</span>
                  </div>

                  <div class="salePrice">
                    <strong>
                      <span>RM</span>
                      <span class="price-text">{{ product.price }}</span>
                    </strong>
                  </div>
                </div>
                <div v-else class="productPrice">
                  <!-- <div class="oriPrice">
                    <span>RM</span>
                    <span>{{ product.oriPrice }}</span>
                  </div> -->
                  <div class="salePrice">
                    <strong>
                      <span>RM</span>
                      <span class="price-text">{{ product.price }}</span>
                    </strong>
                  </div>
                </div>
              </nuxt-link>
            </div>
          </carousel>
        </div>
      </div>
    </section>

    <section class="container productList" width="80%">
      <div class="col-12">
        <div class="homeTitle">
          <!-- <font-awesome-icon fas icon="fire-alt" id="titleIcon" ></font-awesome-icon> -->
          <p class="titleText">
            Products
          </p>
        </div>

        <div class="tmz-card-swiper-item swiper-item" />
      </div>
    </section>
  </div>
</template>

<script>
export default {
  async asyncData ({ $axios, error }) {
    try {
      const products = await $axios.$get(process.env.backendurl + '/api/v1/items')
      const categories = await $axios.$get(
        process.env.backendurl + '/api/v1/categories'
      )
      return {
        categories: categories.data,
        products: products.data
      }
    } catch (err) {
      error(err.response.data.message)
    }
  },

  data () {
    return {
      frontendurl: process.env.frontendurl,
      backendurl: process.env.backendurl
    }
  }
}
</script>

<style scoped>
.main {
  margin-bottom: 50px;
}
a {
  text-decoration: none;
}
.dicountPercent {
  font-size: 13px;
  color: rgb(0, 0, 0);
  padding-left: 3px;
}
.home-ads {
  height: 180px;
  width: 100%;
  margin: 60px 0px;
}
.cat-icon {
  width: 100%;
  border-radius: 55px;
  height: 75px;
  background-color: rgba(222, 249, 255, 1);
}
.iconImage {
  padding: 18px;
  /* color: rgba(22, 76, 117, 1.0);

   tintColor:red;*/
  outline-color: red;
}
.catIconTitle {
  justify-content: flex-end;
  font-size: 17px;
  margin: 10px 0;
}
.cityName {
  color: white;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 18px;
  text-transform: uppercase;
}
.cityImage {
  border-radius: 10px;
  height: 280px;
}
.homeTitle {
  margin-top: 50px;
  margin-bottom: 15px;
  font-size: 28px;
}
#titleIcon {
  color: rgba(46, 190, 201, 1);
  margin-left: 15px;
  margin-right: 15px;
}
.titleText {
  font-weight: bold;
}
.productCard {
  border: 1px solid rgb(234, 234, 234);
  border-radius: 10px;
}
.productImage {
  height: 160px;
  position: relative;
  background-position: 50%;
  object-fit: cover;
  /* background-size: cover; */
  border-radius: 10px 10px 0 0;
}
.productImage:hover {
  opacity: 0.5;
}
.productDetails {
  padding: 4px 10px 0px;
  height: 108px;
}
.cityIcon {
  color: rgba(46, 190, 201, 1);
}
.productCity {
  margin-bottom: 3px;
  color: rgb(155, 171, 180);
  font-size: 14px;
}
.productTitle {
  font-size: 16px;
  font-weight: bold;
  margin-bottom: 6px;
  color: rgb(0, 0, 0);
  line-height: 1.15;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
}
.productPerson {
  margin-bottom: 2px;
  font-size: 12px;
  color: rgb(155, 171, 180);
}
.productRating {
  margin-bottom: 2px;
  font-size: 12px;
  color: rgb(155, 171, 180);
}
.ratingIcon {
  color: rgba(46, 190, 201, 1);
}
.productPrice {
  padding: 0px 10px 4px;
  height: 45px;
}
.oriPrice {
  font-size: 12px;
  text-decoration: line-through;
  color: rgb(155, 171, 180);
}
.salePrice {
  font-size: 18px;
  bottom: 5px;
  position: absolute;
  color: rgba(22, 76, 117, 1);
}
</style>
