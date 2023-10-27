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
      cols="7"
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
      src: require('@/img//talent/meguru2.jpg'),
      name: '生見 愛来(ぬくみ めぐ)',
      birthMonth: 6,
      birthDay: 25,
      height: '176',
      message: `倶楽部麻沙美で働くことになった
                生見愛来ことめぐぐだわよ🎀
                
                Instagramの紹介動画を見て
                鼻血出しちゃった子も
                いるんじゃないの🫣🫣
                
                高専祭当日は私を含め、
                可愛い子がたくさんいるから
                倒れないように鉄分たくさん
                とってくるのよ💞`
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
