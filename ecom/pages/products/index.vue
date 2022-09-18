<template>
  <div class="productPage">
    <section class="container hotDeals" width="80%">
      <el-carousel
        :interval="4000"
        class="home-ads col-12"
      >
        <el-carousel-item v-for="item of 6" :key="item">
          <img
            height="100%"
            width="100%"
            :src="`https://placeimg.com/200/200/any?${item}`"
          >
        </el-carousel-item>
      </el-carousel>
    </section>

    <section class="container productList" width="80%">
      <div class="row">
        <div class="col-md-3 col-sm-12 " align="center">
          <div class="menu-nav">
            <el-menu
              class="el-menu-vertical-demo"
              text-color="rgb(145, 147, 152)"
              unique-opened
              height="100%"
            >
              <div v-for="(category, index) in categories" :key="index" class="select" @click="refresh">
                <nuxt-link
                  :to="
                    localePath({
                      path: 'products',
                      query: { category: category.id}
                    })
                  "
                >
                  <el-menu-item :index="index">
                    <span>{{ category.title }}</span>
                  </el-menu-item>
                </nuxt-link>
              </div>
            </el-menu>
          </div>
        </div>
        <div class="col-md-9 col-sm-12 infinite-list-wrapper" style="overflow:auto">
          <div class="row list">
            <div
              v-for="(product, index) in products"
              :key="index"
              class="col-md-4 col-sm-12 list-item"
            >
              <div class="productCard">
                <nuxt-link
                  :to="localePath({ name: 'products-id', params: { id: product._id } })"
                >
                  <div
                    class="productImage"
                    :style="{
                      backgroundImage: `url(${
                        backendurl +
                        '/public/uploads/' +
                        product.image
                      })`,
                    }"
                  />
                  <div class="productDetails">
                    <div class="productTitle">
                      {{ product.title }}
                    </div>
                  </div>

                  <div class="productPrice">
                    <div class="salePrice">
                      <strong>
                        <span>RM</span>
                        <span class="price-text">{{ product.price }}</span>
                      </strong>
                    </div>
                  </div>
                </nuxt-link>
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
  async asyncData ({ $axios, params }) {
    const products = await $axios.$get(
      process.env.backendurl + '/api/v1/items')
    const categories = await $axios.$get(
      process.env.backendurl + '/api/v1/categories'
    )
    return {
      products: products.data,
      categories: categories.data
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
.menu {
  text-align: center;
}
.el-menu {
  background-color: rgba(242, 242, 242);
  border-right: none;
}
.productCard {
  border: 1px solid rgb(234, 234, 234);
  border-radius: 10px;
  margin-bottom: 25px;
}
.productImage {
  height: 160px;
  position: relative;
  background-position: 50%;
  background-size: cover;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
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
.productPrice {
  padding: 0px 10px 4px;
  height: 65px;
}
.salePrice {
  font-size: 18px;
  bottom: 30px;
  position: absolute;
  color: rgba(22, 76, 117, 1);
}
</style>
