<template>
  <div class="box">
    <img
      :src="src"
      class="img"
    >
  </div>
  <v-row>
    <v-col cols="1" />
    <v-col
      cols="3"
      class="center mt-2 pb-0"
    >
      源氏名
    </v-col>
    <v-col
      cols="4"
      class="center mt-2 pb-0"
    >
      {{ name }}
    </v-col>
  </v-row>
  <v-row>
    <v-col cols="1" />
    <v-col
      cols="3"
      class="center pb-0"
    >
      誕生日
    </v-col>
    <v-col
      cols="4"
      class="center pb-0"
    >
      {{ birthMonth + ' 月 ' + birthDay + ' 日' }}
    </v-col>
  </v-row>
  <v-row>
    <v-col cols="1" />
    <v-col
      cols="3"
      class="center"
    >
      身長
    </v-col>
    <v-col
      cols="4"
      class="center"
    >
      {{ height + ' cm' }}
    </v-col>
  </v-row>
  <v-row>
    <v-col cols="1" />
    <v-col
      cols="3"
      class="center"
    >
      コメント
    </v-col>
    <v-col
      cols="8"
      class="comment"
      style="white-space: pre-line;"
    >
      {{ message }}
    </v-col>
  </v-row>
</template>

<script>
export default {
  data () {
    return {
      // eslint-disable-next-line
      src: require('@/img/talent/syunki.jpg'),
      name: 'はるはる',
      birthMonth: 2,
      birthDay: 18,
      height: 172,
      message: `はるはるよ❤️好きなタイプは
                前腕がフ・ト・い人❤️❤️

                アタシこう見えてバイクの運転
                できるのよ😘

                あら、後ろに乗せてって？
                もう、しょうがないわね～
                アクセル全開で行くわよ💕`
    }
  },
}
</script>

<style scoped>
.comment {
  font-size: medium !important;
}
.center {
  text-align: center;
}
.img {
  height: 100%;
  width: 100%;
  object-fit: cover;
}
.box {
  width: 103vw;
  height: 60vh;
}
</style>
