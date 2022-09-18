<template>
  <div class="singlePage singleCategory">
    <div class="container" width="80%">
      <section class="content_header">
        <div class="col-9 titleBox">
          <h4 class="title">
            {{ $t("new item details") }}
          </h4>
        </div>

        <el-button class="btn btn-pri" @click="$router.go(-1)">
          <i class="el-icon-arrow-left" /> {{ $t("back") }}
        </el-button>
      </section>

      <section>
        <el-form
          ref="form"
          :model="item"
          label-width="250px"
          label-position="left"
        >
          <el-form-item
            prop="title"
            :label="$t('item title')"
            class="formLabel"
          >
            <el-input v-model="item.title" />
          </el-form-item>

          <el-form-item
            prop="title"
            :label="$t('item price')"
            class="formLabel"
          >
            <el-input v-model="item.price" />
          </el-form-item>

          <el-form-item
            prop="title"
            :label="$t('item description')"
            class="formLabel"
          >
            <el-input v-model="item.details_description" />
          </el-form-item>

          <el-form-item
            prop="subCategory"
            :label="$t('item subCategory')"
            class="formLabel"
          >
            <el-select
              v-model="item.subCategory"
              placeholder="Please choose a subCategory for this item"
            >
              <el-option
                v-for="(subCategory, index) in subCategories"
                :key="index"
                :label="subCategory.title"
                :value="subCategory.id"
              />
            </el-select>
          </el-form-item>

          <el-form-item :label="$t('item image')" class="formLabel">
            <el-upload
              ref="uploadSingle"
              class="upload-demo"
              action=""
              :on-change="uploadImage"
              accept="image/*"
              :file-list="singleFile"
              :auto-upload="false"
              list-type="picture-card"
            >
              <i slot="default" class="el-icon-plus" />
              <div slot="tip" class="el-upload__tip">
                {{ $t("jpg/png files with a size less than 500kb") }}
              </div>
            </el-upload>
          </el-form-item>

          <el-button class="btn btn-pri submit" @click="createItem">
            {{ $t("save") }}
          </el-button>
        </el-form>
      </section>
    </div>
    <!-- end of container -->
  </div>
</template>

<script>
export default {
  async asyncData ({ $axios, params, store }) {
    const res = await $axios.$get(
      process.env.backendurl + '/api/v1/subCategories'
    )
    return { subCategories: res.data }
  },
  data () {
    return {
      frontendurl: process.env.frontendurl,
      backendurl: process.env.backendurl,
      singleFile: [],
      item: {
        title: '',
        price: ''
      }
    }
  },
  methods: {
    uploadImage (file, singleFile) {
      this.singleFile = singleFile.slice(-1)
    },
    async createItem () {
      const fd = new FormData()
      fd.append('title', this.item.title)
      fd.append('price', this.item.price)
      fd.append('subCategory', this.item.subCategory)
      for (let i = 0; i < this.singleFile.length; i++) {
        fd.append('image', this.singleFile[i].raw)
      }
      // fd.append('icon', this.selectedFile)
      // eslint-disable-next-line no-unused-vars
      const response = await this.$axios
        .$post(process.env.backendurl + '/api/v1/items/', fd, {
          headers: {
            Authorization: this.$store.getters['auth/getmemberjwt']
          }
        })
        .then((res) => {
          this.$message.success({
            duration: 800,
            message: 'Created item information successfully!'
          })
          this.$router.go(-1)
        })
        .catch((error) => {
          this.$message.error(error.response.data.message)
        })
    }
  }
}
</script>
