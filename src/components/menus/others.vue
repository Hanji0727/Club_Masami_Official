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
          name: 'チェキ',
          // eslint-disable-next-line
          src: require('@/img/others/camera.png'),
          price: '300円',
          detail: '記念写真にどうぞ'
        },
        2: {
          name: 'セット1',
          // eslint-disable-next-line
          src: require('@/img/foods/rawchocolate.png'),
          price: '500円',
          detail: 'スイーツとドリンクのセット'
        },
        3: {
          name: 'セット2',
          // eslint-disable-next-line
          src: require('@/img/foods/pancake.png'),
          price: '500円',
          detail: `スイーツorドリンクと
                   チェキ撮影のセット`
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
.container {
  margin-bottom: 10vh;
}
.detail {
  white-space: pre-line;
}
</style>
