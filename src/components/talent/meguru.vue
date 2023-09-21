<template>
  <div class="box">
    <img :src="src" class="img">
  </div>
  <v-row>
    <v-col cols="1" />
    <v-col cols="3" class="center">源氏名</v-col>
    <v-col cols="4" class="center">{{ name }}</v-col>
  </v-row>
  <v-row>
    <v-col cols="1" />
    <v-col cols="3" class="center">誕生日</v-col>
    <v-col cols="4" class="center">{{ birthMonth + ' 月 ' + birthDay + ' 日' }}</v-col>
  </v-row>
  <v-row>
    <v-col cols="1" />
    <v-col cols="3" class="center">身長</v-col>
    <v-col cols="4" class="center">{{ height + ' cm' }}</v-col>
  </v-row>
  <v-row>
    <v-col cols="1" />
    <v-col cols="3" class="center">身長</v-col>
    <v-col cols="8" style="white-space: pre-line;">{{ message }}</v-col>
  </v-row>
</template>

<script>
export default {
  data () {
    return {
      // eslint-disable-next-line
      src: require('@/img//talent/oji.jpg'),
      name: 'めぐる',
      birthMonth: 6,
      birthDay: 25,
      height: '???',
      message: `会えるのを楽しみにしてるわ♡
                来ないならこっちから行くわよ♡`
    }
  },
}
</script>

<style scoped>
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
