<template>
  <div
    v-for="item in items"
    :key="item"
    class="container"
  >
    <v-row>
      <v-col class="center mb-3">
        {{ item.name }}
      </v-col>
    </v-row>
    <img
      :src="item.src"
      class="img center"
    >
    <v-row>
      <v-col
        cols="12"
        class="center pb-0 detail"
      >
        {{ item.detail }}
      </v-col>
      <v-col
        cols="12"
        class="center pt-0"
      >
        {{ item.price }}
      </v-col>
    </v-row>
  </div>
</template>

<script>
export default {
  data () {
    return {
      items: {
        1: {
          name: 'アスターレモネード',
          // eslint-disable-next-line
          src: require('@/img/drinks/coctail.jpg'),
          price: '300円',
          detail: `レモン・ライム・ソーダ・
                   グレナデンシロップ`
        },
        2: {
          name: 'オレンジ・エード',
          // eslint-disable-next-line
          src: require('@/img/drinks/coctail2.jpg'),
          price: '300円',
          detail: `オレンジ、シュガーシロップ
                   ミネラルウォーター`
        },
        3: {
          name: 'シャーリーテンプル',
          // eslint-disable-next-line
          src: require('@/img/drinks/coctail.jpg'),
          price: '300円',
          detail: `レモン・グレナデン
                   ジンジャーエール`
        },
        4: {
          name: 'シャーリーテンプル・ブラック',
          // eslint-disable-next-line
          src: require('@/img/drinks/coctail2.jpg'),
          price: '300円',
          detail: `レモン・コーラ
                   グレナデン`
        },
        5: {
          name: 'シンデレラ',
          // eslint-disable-next-line
          src: require('@/img/drinks/coctail.jpg'),
          price: '300円',
          detail: 'オレンジ・レモン・パイン'
        },
        6: {
          name: 'シャーリーテンプル',
          // eslint-disable-next-line
          src: require('@/img/drinks/coctail2.jpg'),
          price: '300円',
          detail: `グレープフルーツ
                   クランベリー`
        }
      }
    }
  },
  mounted () {

  }
}
</script>

<style scoped>
.mb-3 {
  margin-bottom: 12px;
  color: #865dff;
}
.img {
  width: 80%;
  height: 25%;
  object-fit: cover;
  margin: auto;
  display: block;
}
.center {
  text-align: center;
}
.detail {
  white-space: pre-line;
}
.container {
  margin-bottom: 10vh;
}
</style>
