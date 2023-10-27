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
      src: require('@/img/talent/reiwa.jpg'),
      name: 'REIKO',
      birthMonth: 1,
      birthDay: 18,
      height: 169,
      message: `はじめまして❤️
                スイカゲームドハマり系女子
                REIKOです💕💕💕

                すっごく緊張してるけど、私の
                セクシーREIKOショット🏹💘で
                あなたのココロ、射止めちゃうわ
                
                当日会えるの楽しみにしてるわ
                ぜひ遊びに来てね👨‍👩‍👧‍👦
                来ないとスイカ投げちゃうぞっ🍉`
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
