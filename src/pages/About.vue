<template>
  <div class="videoBox">
    <video
      class="video"
      :src="videoSrc"
      autoplay
      muted
      loop
      playsinline>
    </video>
  </div>
  <v-spacer style="height: 70vh;" />
  <div class="outer">
    <transition name="blur">
      <div class="inner top">
        <v-row
          v-for="text in texts1"
          :key="text"
          class="my-16"
        >
          <v-col
            cols="12"
            class="center text"
          >
            {{ text }}
          </v-col>
        </v-row>
      </div>
    </transition>
  </div>
  <v-spacer style="height: 100vh;" />

  <div class="outer">
    <transition name="blur">
      <div class="inner bottom">
        <v-row
          v-for="text in texts2"
          :key="text"
          class="my-16"
        >
          <v-col
            cols="12"
            class="center text"
          >
            {{ text }}
          </v-col>
        </v-row>
      </div>
    </transition>
  </div>
  <v-spacer />
</template>

<script>
export default {
  data () {
    return {
      texts1 : {
        0: '１年にたった２日だけ',
        1: 'ひっそりと一関高専に',
        2: 'オープンする俱楽部...'
      },
      texts2: {
        0: 'ママとお話しするのも',
        1: 'スイーツを楽しむのも',
        2: '一緒に写真を撮るのも',
        3: '楽しみ方はお客様次第',
        4: 'ご来店お待ちしてます'
      },
      el: null,
      // eslint-disable-next-line
      videoSrc: require('@/img/movies/atomLegal.mp4')
    }
  },
  created () {
    window.addEventListener("scroll", this.handleScroll)
    window.addEventListener("scroll", this.handleScroll2)

  },
  unmounted () {
    window.removeEventListener("scroll", this.handleScroll)
    window.removeEventListener("scroll", this.handleScroll2)

  },
  mounted () {
    const el = document.querySelector('.top')
    // el.classList.add('blur')
  },
  methods: {
    handleScroll() {
      const el = document.querySelector(".top")
      const videoBox = document.querySelector('.videoBox')
      const elTop = el.getBoundingClientRect().top
      const windowHeight = window.innerHeight
      const yOffset = -100
      console.log(elTop - windowHeight + yOffset)
      if ((-1300 <= elTop - windowHeight + yOffset) && (elTop - windowHeight + yOffset <= -200)) {
        el.classList.add('blur')
        videoBox.classList.add('hide')
      } else if (elTop - windowHeight + yOffset >= -200) {
        videoBox.classList.remove('hide')
      } else {
        el.classList.remove('blur')
      }
    },
    handleScroll2() {
      const el = document.querySelector(".bottom")
      const elTop = el.getBoundingClientRect().top
      const windowHeight = window.innerHeight
      const yOffset = 100
      // console.log(elTop - windowHeight + yOffset)
      if (elTop - windowHeight + yOffset <= 0) {
        el.classList.add('blur')
      } else {
        el.classList.remove('blur')
      }
    }
  }
}
</script>

<style scoped>
.videoBox {
  height: 50vh;
  width: 90vw;
  margin: auto;
  position: fixed;
  left: 50%;
  top: 10%;
  transform: translateX(-50%);
  -webkit-transform: translateX(-50%);
}
.hide {
  animation: hide 1s ease 0s normal forwards;
} 
@keyframes hide {
  from {
    opacity: 1;
    filter: blur(0px) brightness(100%);
  }
  to {
    opacity: 0.3;
    filter: blur(10px) brightness(50%);
  }
}
.video {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
.text {
  font-size: x-large;
}
.outer {
  height: 100vh;
  position: relative;
}
.inner {
  position: absolute;
  top: 50%;
  left: 50%;
  width: 80%;
}
.top {
  transform: translateY(-50%) translateX(-50%);
  -webkit-transform: translateY(-50%) translateX(-50%);
  opacity: 0;
  filter: blur(15px);
}
.blur {
  animation: blur 1.5s ease 0s normal forwards;
  opacity: 1;
  filter: blur(15px);
}
@keyframes blur {
  0% {
    filter: blur(15px);
    opacity: 0;
  }
  100% {
    filter: blur(0px);
    opacity: 1;
  }
}
.bottom {
  transform: translateY(-50%) translateX(-50%);
  -webkit-transform: translateY(-50%) translateX(-50%);
  opacity: 0;
  filter: blur(15px);
}
.center {
  text-align: center;
}
</style>
