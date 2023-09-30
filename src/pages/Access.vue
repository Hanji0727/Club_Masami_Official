<template>
  <v-spacer style="height: 20vh;" />
  <div class="wrap">
    <div
      v-for="item in items"
      :key="item"
      class="content">
      <div class="box">
        <img
          :src="item.src"
          class="img">
      </div>
      <v-row>
        <v-col
          class="center"
          cols="4"
        >
          {{ item.title }}
        </v-col>
        <v-col
          cols="8"
          style="white-space: pre-line;"
        >
          {{ item.text }}
        </v-col>
      </v-row>
    </div>
  </div>
  <!-- <div class="outer">
    <div class="inner">
      <v-row>
        <v-col
          class="center"
          cols="3"
        >
          営業日
        </v-col>
        <v-col cols="9">
          10月28(土)、29(日)
        </v-col>
      </v-row>
      <v-row>
        <v-col
          class="center"
          cols="3"
        >
          時間
        </v-col>
        <v-col cols="9">
          9:00 ~ 17:00
        </v-col>
      </v-row>
      <v-row>
        <v-col 
          class="center"
          cols="3"
        >
          場所
        </v-col>
        <v-col cols="9">
          一関高専 本科教育棟
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="3" />
        <v-col cols="9">
          3階 4C教室
        </v-col>
      </v-row>
      <v-row>
        <v-col
          class="center"
          cols="3"
        >
          その他
        </v-col>

      </v-row>
    </div>
  </div> -->
</template>

<script>
export default {
  data () {
    return {
      items: {
        1: {
          // eslint-disable-next-line
          src: require('@/img/others/bg1.jpg'),
          title: '営業日',
          text: '10/28(土)、29(日)'
        },
        2: {
          // eslint-disable-next-line
          src: require('@/img/others/bg1.jpg'),
          title: '時間',
          text: '9:00 ~ 17:00'
        },
        3: {
          // eslint-disable-next-line
          src: require('@/img/others/bg1.jpg'),
          title: '場所',
          text: `一関高専 本科教育棟
                 3階 4C教室`
        },
        4: {
          // eslint-disable-next-line
          src: require('@/img/others/bg1.jpg'),
          title: 'その他',
          text: `ママがお休みの時間もあります
                 ママの写真を撮る時は一声お願いします`
        },
      }
    }
  },

}
</script>

<style scoped>
.wrap { /* これが無いと右端にスクロールバー分の余白が出来る */
  overflow: hidden;
  font-size: medium;
}
.content {
  width: 65vw;
  height: 35vh;
  margin: auto;
}
.img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  margin: auto;
}
.center {
  text-align: center;
}
</style>
