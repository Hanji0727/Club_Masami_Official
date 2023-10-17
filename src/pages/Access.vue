<template>
  <v-spacer style="height: 20vh;" />
  <div class="wrap">
    <div
      v-for="(item, index) in items"
      :key="item"
      class="content">
      <div class="box">
        <img
          :src="item.src"
          class="img">
      </div>
      <v-row>
        <v-col
          class="center pb-0"
          cols="12"
          style="font-size: x-large;"
        >
          {{ item.title }}
        </v-col>
        <v-col
          v-if="index == 4"
          cols="12"
          class="center pt-0"
          style="white-space: pre-line; font-size: larger;"
        >
          {{ item.text }}
        </v-col>
        <v-col
          v-else
          cols="12"
          class="center pt-0"
          style="white-space: pre-line; font-size: xx-large;"
        >
          {{ item.text }}
        </v-col>
      </v-row>
    </div>
  </div>
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
          text: `休憩や受付などママが
                 お休みの時間もあります

                 ママの写真を撮る時は
                 一声お願いします`
        },
      }
    }
  },
  created () {
    window.addEventListener("scroll", this.handleScroll)
    window.addEventListener("scroll", this.handleScroll2)
    window.addEventListener("scroll", this.handleScroll3)
  },
  unmounted () {
    window.removeEventListener("scroll", this.handleScroll)
    window.removeEventListener("scroll", this.handleScroll2)
    window.removeEventListener("scroll", this.handleScroll3)
  },
  mounted () {
    const el = document.getElementsByClassName('content')[0]
    el.classList.add('show')
  },
  methods: {
    handleScroll () {
      const el = document.getElementsByClassName('content')[1]
      const elTop = el.getBoundingClientRect().top
      const windowHeight = window.innerHeight
      const yOffset = -100
      console.log(elTop - windowHeight + yOffset)
      if (elTop - windowHeight + yOffset <= -280) {
        el.classList.add('show')
      }
    },
    handleScroll2 () {
      const el = document.getElementsByClassName('content')[2]
      const elTop = el.getBoundingClientRect().top
      const windowHeight = window.innerHeight
      const yOffset = -100
      if (elTop - windowHeight + yOffset <= -300) {
        el.classList.add('show')
      }
    },
    handleScroll3 () {
      const el = document.getElementsByClassName('content')[3]
      const elTop = el.getBoundingClientRect().top
      const windowHeight = window.innerHeight
      const yOffset = -100
      if (elTop - windowHeight + yOffset <= -300) {
        el.classList.add('show')
      }
    }
  }
}
</script>

<style scoped>
.wrap { /* これが無いと右端にスクロールバー分の余白が出来る */
  overflow: hidden;
  font-size: medium;
  position: relative;
}
.content {
  width: 85vw;
  height: 50vh;
  margin: auto;
  opacity: 0;
}
.img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
.center {
  text-align: center;
}
.show {
  animation: show 1s ease 0s normal forwards;
}
@keyframes show {
  from {
    opacity: 0;
    transform: translateY(60px);
  }
  to {
    opacity: 1;
    transform: translateY(0px);
  }
}
</style>
