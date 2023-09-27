<template>
  <div class="wrap">
    <v-row>
      <v-col
        cols="12"
        class="center my-3"
      >
        <h2>ママたちのご紹介</h2>
      </v-col>
    </v-row>
    <div id="container">
      <div class="content first" />
      <div class="content second" />
      <div class="content third" />
      <div class="content fourth" />
      <div class="content fifth" />
      <router-view />
    </div>
    <v-row class="mt-4">
      <v-col
        v-for="staff in staffs"
        :key="staff"
        class="center pa-0"
        cols="6" 
        md="4"
      >
        <router-link
          :to="'/' + staff.name"
          class="link"
        >
          <img
            :src="staff.src"
            width="427"
            height="640"
            class="img"
          >
        </router-link>
      </v-col>
    </v-row>
  </div>
</template>

<script>
export default {
  data () {
    return {
      staffs: {
        0: {
          name: 'hanji',
          // eslint-disable-next-line
          src: require('@/img/talent/santa.jpg')
        },
        1: {
          name: 'meguru',
          // eslint-disable-next-line
          src: require('@/img/talent/santa.jpg')
        },
        2: {
          name: 'ren',
          // eslint-disable-next-line
          src: require('@/img/talent/santa.jpg')
        },
        3: {
          name: 'syunki',
          // eslint-disable-next-line
          src: require('@/img/talent/santa.jpg')

        },
        4: {
          name: 'yoshiki',
          // eslint-disable-next-line
          src: require('@/img/talent/santa.jpg')

        },
        5: {
          name: 'shinta',
          // eslint-disable-next-line
          src: require('@/img/talent/santa.jpg')

        },
        6: {
          name: 'yuki',
          // eslint-disable-next-line
          src: require('@/img/talent/santa.jpg')

        },
        7: {
          name: 'taichi',
          // eslint-disable-next-line
          src: require('@/img/talent/santa.jpg')
        },
        8: {
          name: 'yanma',
          // eslint-disable-next-line
          src: require('@/img/talent/santa.jpg')
        },
        9: {
          name: 'jyon',
          // eslint-disable-next-line
          src: require('@/img/talent/santa.jpg')
        },
        10: {
          name: 'kaede',
          // eslint-disable-next-line
          src: require('@/img/talent/santa.jpg')
        },
        11: {
          name: 'takeru',
          // eslint-disable-next-line
          src: require('@/img/talent/santa.jpg')
        }
      },
      show: false
    }
  },
  watch: {
    '$route': function(to, from) {
      if (to.path !== from.path) {
        console.log('view changed')
      }
    }
  },
  mounted() {
    const container = document.getElementById('container')
    const contents = document.getElementsByClassName('content')
    const elements = document.getElementsByClassName('img')

    container.addEventListener('animationend', function() {
      container.classList.remove('show')
      for (var i = 0; i < contents.length; i++) {
        contents[i].classList.remove('slide0', 'slide1', 'slide2', 'slide3', 'slide4')
      }
    })


    var tmpElm = null
    for (var i = 0; i < elements.length; i++) {
      elements[i].addEventListener('click', function() {
        // 個人の画像の切替処理用に、box等を配置する。
        container.classList.add('box', 'show')
        for (var i = 0; i < contents.length; i++) {
          contents[i].classList.add('box')
          contents[i].classList.add('forAnimation')
        }
        contents[0].classList.add('slide0')
        contents[1].classList.add('slide1')
        contents[2].classList.add('slide2')
        contents[3].classList.add('slide3')
        contents[4].classList.add('slide4')

        // 一覧の画像をクリックしたら、クリックした人の画像の透明度を下げる
        if (tmpElm !== null) {
          tmpElm.classList.remove('isClicked')
        }
        tmpElm = this
        this.classList.add('isClicked')
        scrollTo({
          top: 0,
          left: 0,
          behavior:"smooth"
        })
      })
    }
  },
  methods: {

  }
}
</script>

<style scoped>
.wrap { /* これが無いと右端にスクロールバー分の余白が出来る */
  overflow: hidden;
}
.center {
  text-align: center;
}
.img {
  width: 80%;
  height: 25vh;
  object-fit: cover;
}
.isClicked {
  opacity: 0.2;
}
.link {
  text-decoration: none;
  color: inherit;
}
.box { /* container に付与する */
  position: relative;
  height: 85vh;
  overflow: hidden;
}
.show {
  animation-name: show;
  animation-fill-mode: backwards;
  animation-duration: 2s;
  animation-timing-function: ease;
  animation-direction: normal;
}
@keyframes show {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
.forAnimation { /* content に付与する */
  position: absolute;
  background-color: white;
  width: 100vw;
  height: 20%;
  left: -100%;
/*  -100% ~ 100% で左から右に  */
}
.slide0 {
  animation: slide0 2s ease backwards;
}
.slide1 {
  animation: slide1 2s ease backwards;
  animation-delay: 0.1s;
}
.slide2 {
  animation: slide2 2s ease backwards;
  animation-delay: 0.2s;
}
.slide3 {
  animation: slide3 2s ease backwards;
  animation-delay: 0.3s;
}
.slide4 {
  animation: slide4 2s ease backwards;
  animation-delay: 0.3s;
}
@keyframes slide0 {
  from {
    transform: translateX(0%);
  }
  to {
    transform: translateX(200%);
  }
}
@keyframes slide1 {
  from {
    transform: translateX(200%);
  }
  to {
    transform: translateX(0%);
  }
}
@keyframes slide2 {
  from {
    transform: translateX(0%);
  }
  to {
    transform: translateX(200%);
  }
}
@keyframes slide3 {
  from {
    transform: translateX(200%);
  }
  to {
    transform: translateX(0%);
  }
}
@keyframes slide4 {
  from {
    transform: translateX(0%);
  }
  to {
    transform: translateX(200%);
  }
}

.second {
  top: 20%;
}
.third {
  top: 40%;
}
.fourth {
  top: 60%;
}
.fifth {
  top: 80%;
}
</style>
