<template>
  <div class="container">
    <v-row>
      <v-col class="center" cols="12 pb-0">
        俱楽部麻沙美
      </v-col>
      <v-col class="center" cols="12 mb-3">
        Club Masami
      </v-col>
    </v-row>
    <v-row>
      <v-col class="center" cols="12 pb-0">
        サイトマップ
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="3" />
      <v-col class="center" cols="3 pa-0">
        <router-link class="link" to="/about">
          about
        </router-link>
      </v-col>
      <v-col class="center" cols="3 pa-0">
        <router-link class="link" to="/staff">
          staff
        </router-link>
      </v-col>
      <v-col cols="3" />

      <v-col cols="3" />
      <v-col class="center" cols="3 pa-0 mb-3">
        <router-link class="link" to="/menu">
          menu
        </router-link>
      </v-col>
      <v-col class="center" cols="3 pa-0 mb-3">
        <router-link class="link" to="/access">
          access
        </router-link>
      </v-col>
      <v-col cols="3" />
    </v-row>

    <v-row>
      <v-col class="center" cols="12 pb-0">
        SNS
      </v-col>
      <v-col cols="12" class="center">
        <a href="https://www.instagram.com/club_masami/">
          <v-icon>
            mdi-instagram
          </v-icon>
        </a>
      </v-col>
    </v-row>
    
  </div>
</template>

<script>
export default {
  data () {
    return {
      // eslint-disable-next-line
      src: require('@/img/others/QR_insta.jpg')
    }
  }
}
</script>

<style scoped>
.image {
  width: 1rem;
  height: 1rem;
}
.center {
  text-align: center;
}
.container {
  width: 80vw;
  height: 24rem;
  margin: auto;
  padding-top: 3rem;
}
.link {
  text-decoration: none;
  color: inherit;
  font-size: smaller;
}
</style>
