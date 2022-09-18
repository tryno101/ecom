<template>
  <div class="stick">
    <div id="header" class="container" width="80%">
      <b-navbar toggleable="lg">
        <nuxt-link :to="localePath('index')">
          <b-navbar-brand>
            <img
              src="http://localhost:3000/images/log.png"
              style="height: 44px"
            >
          </b-navbar-brand>
        </nuxt-link>

        <b-navbar-toggle target="nav-collapse" />

        <b-collapse id="nav-collapse" is-nav class="try">
          <!-- Right aligned nav items -->
          <b-navbar-nav class="ml-auto reverse">
            <b-nav-dropdown :text="$t('language')">
              <b-dropdown-item>
                <nuxt-link :to="switchLocalePath('en-us')">
                  <img src="/images/lang/united-states.png" class="flag">
                  {{ $t("english") }}
                </nuxt-link>
              </b-dropdown-item>
              <b-dropdown-item>
                <nuxt-link :to="switchLocalePath('ms-my')">
                  <img src="/images/lang/malaysia.png" class="flag">
                  {{ $t("malay") }}
                </nuxt-link>
              </b-dropdown-item>
              <b-dropdown-item>
                <nuxt-link :to="switchLocalePath('zh-cn')">
                  <img src="/images/lang/china.png" class="flag">
                  {{ $t("chinese") }}
                </nuxt-link>
              </b-dropdown-item>
            </b-nav-dropdown>

            <b-nav-item-dropdown right>
              <!-- Using 'button-content' slot -->
              <template #button-content>
                <em>MYR</em>
              </template>
              <b-dropdown-item
                href="#"
              >
                USD United State Dollar
              </b-dropdown-item>
              <b-dropdown-item href="#">
                TWD New Taiwan Dollar
              </b-dropdown-item>
            </b-nav-item-dropdown>

            <!-- <b-nav-item href="#">{{this.user.name}}</b-nav-item> -->
            <b-nav-item href="/">
              Help
            </b-nav-item>
            <b-nav-item href="/cart">
              <svg
                version="1.0"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 512.000000 512.000000"
                preserveAspectRatio="xMidYMid meet"
              >
                <g
                  transform="translate(0.000000,512.000000) scale(0.100000,-0.100000)"
                  fill="#000000"
                  stroke="none"
                >
                  <path
                    d="M0 4910 l0 -120 289 0 289 0 9 -37 c124 -479 667 -2491 887 -3285
                                l93 -338 -46 -29 c-99 -64 -184 -180 -221 -300 -14 -44 -20 -92 -20 -158 0
                                -194 88 -355 255 -465 200 -131 488 -104 664 62 112 108 171 240 174 390 1
                                103 -14 173 -59 263 l-33 67 695 0 c383 0 694 -3 692 -8 -1 -4 -15 -32 -30
                                -62 -107 -216 -65 -467 106 -635 112 -111 225 -158 381 -158 214 -1 398 111
                                493 300 109 220 68 465 -109 642 -73 74 -191 135 -289 150 -42 7 -474 11
                                -1241 11 l-1177 0 -16 62 c-8 35 -26 101 -39 148 l-24 85 1221 -3 c886 -2
                                1237 0 1281 8 127 25 263 124 323 238 22 42 103 325 301 1065 149 555 271
                                1018 271 1030 0 36 -38 87 -75 103 -29 12 -314 14 -2014 14 l-1979 0 -22 83
                                c-169 627 -252 923 -265 944 -33 50 -57 53 -425 53 l-340 0 0 -120z m4835
                                -1227 c-3 -16 -114 -433 -246 -928 -265 -996 -251 -956 -349 -1007 l-52 -28
                                -1202 0 c-1145 0 -1203 1 -1241 19 -44 20 -83 54 -108 92 -9 13 -102 335 -206
                                714 -176 643 -305 1106 -317 1148 -5 16 88 17 1861 17 l1867 0 -7 -27z m-2871
                                -2757 c63 -31 119 -89 150 -155 32 -71 30 -199 -6 -266 -55 -104 -148 -165
                                -264 -173 -94 -6 -158 15 -224 75 -225 202 -77 567 222 550 46 -3 84 -13 122
                                -31z m2304 0 c111 -56 174 -157 175 -281 0 -64 -4 -83 -32 -139 -59 -121 -164
                                -181 -301 -174 -126 7 -214 68 -269 188 -67 145 -3 328 142 401 66 34 87 39
                                163 35 51 -3 86 -12 122 -30z"
                  />
                </g>
              </svg>
              <!-- cart icon -->
            </b-nav-item>

            <!-- <div v-b-toggle.my-collapse>
               <p> {{get}} </p>
            </div>

 <b-collapse id="my-collapse">
      <b-card title="Collapsible card">
        Hello world!
      </b-card>
    </b-collapse> -->

            <b-nav-dropdown v-if="getuserjwt" right>
              <template #button-content>
                <!-- <em class="profile_box"> no-caret -->
                <!-- <span> {{ get }} </span> -->

                <!-- <div class="userImage" :style="{ backgroundImage: `url(${backendurl + '/public/uploads/users/' + get})` }"></div> -->
                <!-- <p>{{this.$state.user}}</p> -->
                <!-- <p>{{this.$store.$state.user}}</p> -->
                <img
                    class="img"
                    :src="backendurl + '/public/users/' + get"
                    alt=""
                  />
                <!-- <div class="userImage" :style="{ backgroundImage: `url(${frontendurl + 'images/travel.png'})` }"></div> -->
                <!-- </em> -->
              </template>
              <b-dropdown-item>
                <nuxt-link :to="localePath('users-my-account')">
                  <svg
                    version="1.0"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 512.000000 512.000000"
                    preserveAspectRatio="xMidYMid meet"
                  >
                    <g
                      transform="translate(0.000000,512.000000) scale(0.100000,-0.100000)"
                      stroke="none"
                    >
                      <path
                        d="M2380 5114 c-19 -2 -78 -9 -130 -14 -330 -36 -695 -160 -990 -336
                                        -375 -224 -680 -529 -904 -904 -175 -292 -291 -632 -338 -990 -16 -123 -16
                                        -497 0 -620 82 -623 356 -1150 820 -1581 256 -239 575 -425 922 -539 274 -91
                                        491 -124 800 -124 228 0 329 9 530 50 689 141 1304 583 1674 1204 175 292 291
                                        632 338 990 16 123 16 497 0 620 -47 358 -163 698 -338 990 -224 375 -529 680
                                        -904 904 -289 173 -634 291 -980 336 -88 12 -438 21 -500 14z m385 -304 c583
                                        -54 1146 -347 1517 -790 487 -581 652 -1337 452 -2067 -77 -281 -213 -550
                                        -398 -785 -34 -43 -63 -78 -66 -78 -3 0 -19 43 -35 96 -85 284 -283 589 -512
                                        790 -144 126 -341 247 -518 319 l-40 16 35 26 c63 47 216 208 253 266 142 221
                                        202 460 177 704 -37 366 -251 681 -575 850 -674 350 -1488 -91 -1565 -850 -20
                                        -197 18 -404 106 -579 71 -141 189 -287 305 -375 27 -20 49 -40 49 -43 0 -3
                                        -33 -18 -73 -34 -270 -109 -540 -321 -729 -571 -109 -145 -213 -349 -264 -520
                                        -15 -52 -31 -95 -34 -95 -8 0 -122 148 -179 233 -63 94 -174 310 -219 425 -78
                                        198 -127 427 -144 675 -52 717 271 1445 839 1898 459 366 1041 542 1618 489z
                                        m5 -860 c257 -73 458 -274 536 -535 35 -119 37 -289 6 -406 -93 -347 -395
                                        -579 -752 -579 -357 0 -659 232 -752 579 -31 117 -29 287 6 406 88 296 316
                                        497 636 559 58 11 247 -3 320 -24z m-5 -1851 c310 -40 584 -178 821 -414 178
                                        -178 290 -358 362 -585 26 -81 67 -271 59 -275 -1 -1 -31 -24 -67 -52 -308
                                        -240 -679 -394 -1095 -454 -116 -17 -454 -17 -570 0 -416 60 -787 214 -1095
                                        454 -36 28 -66 51 -67 52 -2 1 4 39 12 84 91 517 461 950 961 1124 221 77 431
                                        98 679 66z"
                      />
                    </g>
                  </svg>
                  <span> {{ $t("profile") }} </span>
                  <!-- {{getuserjwt}} -->
                </nuxt-link>
              </b-dropdown-item>
              <b-dropdown-item>
                <nuxt-link :to="localePath('users-coupons')">
                  <svg
                    version="1.0"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 512.000000 512.000000"
                    preserveAspectRatio="xMidYMid meet"
                  >
                    <g
                      transform="translate(0.000000,512.000000) scale(0.100000,-0.100000)"
                      stroke="none"
                    >
                      <path
                        d="M205 4042 c-97 -33 -162 -101 -190 -195 -20 -66 -22 -690 -3 -732 15
                                        -33 56 -55 102 -55 116 0 245 -57 337 -149 199 -199 199 -503 0 -702 -92 -92
                                        -221 -149 -337 -149 -47 0 -89 -23 -103 -58 -9 -21 -11 -123 -9 -373 l3 -344
                                        28 -57 c32 -64 80 -111 146 -142 l46 -21 2335 0 2335 0 46 21 c66 31 114 78
                                        146 142 l28 57 3 344 c2 250 0 352 -9 373 -14 35 -56 58 -103 58 -115 0 -243
                                        57 -336 149 -201 198 -200 504 0 702 94 93 220 149 336 149 47 0 89 23 103 58
                                        9 21 11 123 9 373 l-3 344 -28 57 c-32 64 -80 111 -146 142 l-46 21 -2320 2
                                        c-2182 2 -2323 1 -2370 -15z m995 -342 c0 -120 4 -168 14 -189 35 -66 137 -66
                                        172 0 10 21 14 69 14 189 l0 160 1720 0 c1311 0 1725 -3 1745 -12 52 -23 55
                                        -44 55 -331 l0 -264 -57 -12 c-32 -7 -101 -33 -153 -58 -80 -39 -108 -59 -181
                                        -132 -71 -71 -94 -102 -133 -181 -101 -206 -101 -414 0 -620 39 -79 62 -110
                                        133 -181 73 -73 101 -93 181 -132 52 -25 121 -51 153 -58 l57 -12 0 -264 c0
                                        -287 -3 -308 -55 -331 -20 -9 -434 -12 -1745 -12 l-1720 0 0 160 c0 176 -7
                                        206 -55 228 -33 15 -57 15 -90 0 -48 -22 -55 -52 -55 -228 l0 -160 -460 0
                                        c-335 0 -466 3 -485 12 -52 23 -55 44 -55 331 l0 264 63 13 c34 8 103 34 152
                                        58 73 37 107 62 176 131 72 72 94 102 132 181 102 209 102 411 0 620 -38 79
                                        -60 109 -132 181 -70 70 -103 94 -179 132 -50 25 -119 51 -152 58 l-60 12 0
                                        266 c1 284 3 301 51 327 19 10 122 13 487 14 l462 0 0 -160z"
                      />
                      <path
                        d="M1251 3246 c-42 -23 -50 -52 -51 -183 0 -135 9 -167 51 -189 52 -27
                                        115 -8 137 41 7 15 12 74 12 145 0 71 -5 130 -12 145 -22 48 -88 68 -137 41z"
                      />
                      <path
                        d="M2051 3246 c-67 -37 -65 -143 4 -174 19 -9 245 -12 906 -12 956 0
                                        921 -2 947 55 23 51 7 107 -39 131 -40 20 -1781 20 -1818 0z"
                      />
                      <path
                        d="M1251 2646 c-87 -48 -50 -186 49 -186 51 0 100 49 100 99 0 75 -83
                                        124 -149 87z"
                      />
                      <path
                        d="M2051 2646 c-67 -37 -65 -143 4 -174 19 -9 245 -12 906 -12 956 0
                                        921 -2 947 55 23 51 7 107 -39 131 -40 20 -1781 20 -1818 0z"
                      />
                      <path
                        d="M1251 2246 c-42 -23 -50 -52 -51 -183 0 -135 9 -167 51 -189 52 -27
                                        115 -8 137 41 7 15 12 74 12 145 0 71 -5 130 -12 145 -22 48 -88 68 -137 41z"
                      />
                      <path
                        d="M2051 2046 c-67 -37 -65 -143 4 -174 19 -9 245 -12 906 -12 956 0
                                        921 -2 947 55 23 51 7 107 -39 131 -40 20 -1781 20 -1818 0z"
                      />
                    </g>
                  </svg>
                  <span> {{ $t("promo codes") }} </span>
                </nuxt-link>
              </b-dropdown-item>
              <b-dropdown-item>
                <nuxt-link :to="localePath('users-my-bookings')">
                  <svg
                    id="Capa_1"
                    width="24"
                    height="24"
                    version="1.1"
                    xmlns="http://www.w3.org/2000/svg"
                    xmlns:xlink="http://www.w3.org/1999/xlink"
                    x="0px"
                    y="0px"
                    viewBox="0 0 512 512"
                    style="enable-background: new 0 0 512 512"
                    xml:space="preserve"
                  >
                    <path
                      d="M448,0H64C28.715,0,0,28.715,0,64v384c0,35.285,28.715,64,64,64h384c35.285,0,64-28.715,64-64V64
                                        C512,28.715,483.285,0,448,0z M469.333,448c0,11.776-9.579,21.333-21.333,21.333H64c-11.755,0-21.333-9.557-21.333-21.333V64
                                        c0-11.755,9.579-21.333,21.333-21.333h384c11.755,0,21.333,9.579,21.333,21.333V448z"
                    />
                    <path
                      d="M147.627,119.893c-1.067-2.773-2.56-4.907-4.48-7.04c-1.067-0.853-2.133-1.707-3.2-2.56c-1.28-0.853-2.56-1.493-3.84-1.92
                                        c-1.28-0.64-2.56-1.067-3.84-1.28c-4.267-0.853-8.533-0.427-12.373,1.28c-2.56,1.067-4.907,2.56-7.04,4.48
                                        c-1.92,2.133-3.413,4.267-4.48,7.04c-1.067,2.56-1.707,5.333-1.707,8.107s0.64,5.547,1.707,8.107
                                        c1.067,2.773,2.56,4.907,4.48,7.04c4.053,3.84,9.6,6.187,15.147,6.187c1.28,0,2.773-0.213,4.267-0.427
                                        c1.28-0.213,2.56-0.64,3.84-1.28c1.28-0.427,2.56-1.067,3.84-1.92c1.067-0.853,2.133-1.707,3.2-2.56
                                        c3.84-4.053,6.187-9.6,6.187-15.147C149.333,125.227,148.693,122.453,147.627,119.893z"
                    />
                    <path
                      d="M384,106.667H213.333C201.557,106.667,192,116.224,192,128s9.557,21.333,21.333,21.333H384
                                        c11.776,0,21.333-9.557,21.333-21.333S395.776,106.667,384,106.667z"
                    />
                    <path
                      d="M148.907,251.733c-0.213-1.28-0.64-2.56-1.28-3.84c-0.427-1.28-1.067-2.56-1.92-3.84c-0.853-1.067-1.707-2.133-2.56-3.2
                                        c-2.133-1.92-4.48-3.413-7.04-4.48c-5.12-2.133-11.093-2.133-16.213,0c-2.56,1.067-4.907,2.56-7.04,4.48
                                        c-0.853,1.067-1.707,2.133-2.56,3.2c-0.853,1.28-1.493,2.56-1.92,3.84c-0.64,1.28-1.067,2.56-1.28,3.84
                                        c-0.213,1.493-0.427,2.987-0.427,4.267c0,5.547,2.347,11.093,6.187,15.147c4.053,3.84,9.6,6.187,15.147,6.187
                                        s11.093-2.347,15.147-6.187c3.84-4.053,6.187-9.6,6.187-15.147C149.333,254.72,149.12,253.227,148.907,251.733z"
                    />
                    <path
                      d="M384,234.667H213.333C201.557,234.667,192,244.224,192,256s9.557,21.333,21.333,21.333H384
                                        c11.776,0,21.333-9.557,21.333-21.333S395.776,234.667,384,234.667z"
                    />
                    <path
                      d="M147.627,375.893c-1.067-2.773-2.56-4.907-4.48-7.04c-5.973-5.781-15.36-7.68-23.253-4.48
                                        c-2.56,1.067-4.907,2.56-7.04,4.48c-1.92,2.133-3.413,4.48-4.48,7.04s-1.707,5.333-1.707,8.107c0,5.76,2.133,11.093,6.187,15.147
                                        c4.053,4.032,9.387,6.187,15.147,6.187s11.093-2.155,15.147-6.187c4.053-4.053,6.187-9.387,6.187-15.147
                                        C149.333,381.227,148.907,378.453,147.627,375.893z"
                    />
                    <path
                      d="M384,362.667H213.333C201.557,362.667,192,372.203,192,384c0,11.797,9.557,21.333,21.333,21.333H384
                                        c11.776,0,21.333-9.536,21.333-21.333C405.333,372.203,395.776,362.667,384,362.667z"
                    />
                  </svg>
                  <span>{{ $t("my bookings") }} </span>
                </nuxt-link>
              </b-dropdown-item>
              <b-dropdown-item>
                <nuxt-link :to="localePath('users-my-reviews')">
                  {{ $t("reviews") }}
                </nuxt-link>
              </b-dropdown-item>
              <b-dropdown-item>
                <nuxt-link :to="localePath('users-addresses')">
                  {{ $t("manage address") }}
                </nuxt-link>
              </b-dropdown-item>
              <b-dropdown-item>
                <nuxt-link :to="localePath('users-my-wishlist')">
                  {{ $t("wishlist") }}
                </nuxt-link>
              </b-dropdown-item>
              <b-dropdown-item>
                <nuxt-link :to="localePath('users-settings')">
                  {{ $t("settings") }}
                </nuxt-link>
              </b-dropdown-item>
              <b-dropdown-item @click="logout">
                <nuxt-link :to="localePath('index')">
                  {{ $t("log out") }}
                </nuxt-link>
              </b-dropdown-item>
            </b-nav-dropdown>

            <b-nav-item v-if="!getuserjwt" href="/signup">
              <nuxt-link :to="localePath('signup')">
                {{ $t("sign up") }}
              </nuxt-link>
            </b-nav-item>
            <b-nav-item v-if="!getuserjwt">
              <nuxt-link :to="localePath('login')">
                {{ $t("log in") }}
              </nuxt-link>
            </b-nav-item>
          </b-navbar-nav>
        </b-collapse>
      </b-navbar>
    </div>
  </div>
</template>

<script>
import { mapMutations } from 'vuex'

export default {
  data () {
    return {
      frontendurl: process.env.frontendurl,
      backendurl: process.env.backendurl
      // name : this.$store.$auth.state.user
    }
  },

  computed: {
    getuserjwt () {
      return this.$store.getters['auth/getuserjwt']
    },
    get () {
      return this.$store.getters['auth/getname']
    }
  },
  methods: {
    ...mapMutations({
      logout: 'auth/logout'
    })
  }
}
</script>

<style scoped>
.navbar {
  padding-top: 0px;
  padding-bottom: 0px;
}
@media (max-width: 992px) {
  .navbar-nav {
    /* display: flex; */
    flex-direction: column-reverse;
  }
}
/* flex-column-reverse .dropdown-toggle::after {
    display: none;
} */ /* IT'S HERE */
/* .caret{
display:inline-block;
width:0;
height:0;
margin-left:2px;
vertical-align:middle;
border-top:4px dashed;
border-top:4px solid\9;
border-right:4px solid transparent;
border-left:4px solid transparent
} */
/* .dropdown-toggle.caret-off::before {
    display: none;
} */
svg {
  margin-right: 10px;
}
a {
  color: rgba(0, 0, 0, 0.5);
  font-size: 20px;
}
a:hover {
  fill: rgba(46, 190, 201, 1);
  color: rgba(38, 190, 201);
  text-decoration-line: none;
}
.flag {
  height: 35px;
}
/* .profile_box {
    display: flex;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    flex-direction: column;
    -webkit-box-pack: center;
    justify-content: center;
    -webkit-box-align: center;
    align-items: center;
    text-align: center;
background-color: rgb(255,255,255);
} */
img.img {
  /* height: 32px;
  width: 32px; */
  height: 32px;
  border-radius: 25px;
  border: none;
}
</style>
