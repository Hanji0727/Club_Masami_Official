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
          :to="'/staff/' + staff.name"
          class="link"
        >
          <img
            :src="staff.src"
            width="427"
            height="640"
            class="img"
          >
          <v-row>
            <v-col cols="8">
              {{ staff.a }}
            </v-col>
            <v-col cols="2">
              <v-icon>
                mdi-gesture-tap
              </v-icon>
            </v-col>
          </v-row>
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
          name: 'hatyan',
          // eslint-disable-next-line
          src: require('@/img/talent/hanji.jpg'),
          a: 'はーちゃん'
        },
        1: {
          name: 'meguru',
          // eslint-disable-next-line
          src: require('@/img/talent/meguru.jpg'),
          a: 'めぐぐ'
        },
        2: {
          name: 'nasukama',
          // eslint-disable-next-line
          src: require('@/img/talent/ren2.jpg'),
          a: '那須カマ'
        },
        3: {
          name: 'haruharu',
          // eslint-disable-next-line
          src: require('@/img/talent/syunki.jpg'),
          a: 'はるはる'

        },
        4: {
          name: 'shinshin',
          // eslint-disable-next-line
          src: require('@/img/talent/shinta.jpg'),
          a: '伸伸'
        },
        5: {
          name: 'yui',
          // eslint-disable-next-line
          src: require('@/img/talent/yuki2.jpg'),
          a: 'ゆい'
        },
        6: {
          name: 'mamadona',
          // eslint-disable-next-line
          src: require('@/img/talent/taichi2.jpg'),
          a: 'ママドーナ'
        },
        7: {
          name: 'reiko',
          // eslint-disable-next-line
          src: require('@/img/talent/reiwa.jpg'),
          a: 'REIKO'
        },
        8: {
          name: 'shion',
          // eslint-disable-next-line
          src: require('@/img/talent/jion.jpg'),
          a: 'しおん'
        },
        9: {
          name: 'kaetyan',
          // eslint-disable-next-line
          src: require('@/img/talent/kaede.jpg'),
          a: 'かえちゃん'
        },
        10: {
          name: 'aotyan',
          // eslint-disable-next-line
          src: require('@/img/talent/aoshi.jpg'),
          a: 'あおちゃん'
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
  height: auto;
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
.first {
  background-color: #e284ff;
}
.second {
  top: 20%;
  background-color: #d284ff;
}
.third {
  top: 40%;
  background-color: #c284ff;
}
.fourth {
  top: 60%;
  background-color: #b284ff;
}
.fifth {
  top: 80%;
  background-color: #a284ff;
}
</style>
