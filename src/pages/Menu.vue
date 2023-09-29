<template>
  <div class="img-box">
    <img
      :src="src"
      class="img"
    >
    <div class="text-box">
      <v-row>
        <v-col
          cols="12"
          class="text center top"
        >
          誰にでもお楽しみ頂けるよう
        </v-col>
      </v-row>
      <v-row>
        <v-col
          cols="12"
          class="text center middle"
        >
          ノンアルコールカクテルと
        </v-col>
      </v-row>
      <v-row>
        <v-col
          cols="12"
          class="text center bottom"
        >
          スイーツをご提供致します
        </v-col>
      </v-row>
    </div>
  </div>

  <v-spacer style="height: 5vh;" />

  <div class="tab">
    <v-row>
      <router-link
        v-for="item in items"
        :key="item"
        :to="'/' + item"
        class="link"
      >
        <v-col
          :id="item"
          cols="4"
          class="center px-0 tab-item"
        >
          {{ item }}
        </v-col>
      </router-link>
    </v-row>
  </div>

  <div class="content">
    <router-view />
  </div>
</template>

<script>
export default {
  data () {
    return {
      // eslint-disable-next-line
      src: require('@/img/others/club.jpg'),
      items: ['foods', 'drinks', 'others']
    }
  },
  mounted () {
    // メニューのタブをクリックした際に色をつけて、他の箇所から色を消す処理
    const elements = document.getElementsByClassName('tab-item')
    for (var i = 0; i < elements.length; i++) {
      elements[i].addEventListener('click', function() {
        switch (this.id) {
          case 'foods':
            elements[0].classList.add('active')
            elements[1].classList.remove('active')
            elements[2].classList.remove('active')
            break;
          case 'drinks':
            elements[0].classList.remove('active')
            elements[1].classList.add('active')
            elements[2].classList.remove('active')
            break;
          case 'others':
            elements[0].classList.remove('active')
            elements[1].classList.remove('active')
            elements[2].classList.add('active')
            break;
        }
      })
    }
  },
  methods: {

  }
}
</script>

<style scoped>
.link {
  text-decoration: none;
  width: 33%;
  text-align: center;
  margin: 0;
  display: contents;
  color: black;
}
a:visited {
  color: inherit;
}
.content {
  width: 70vw;
  /* height: 100vh; */
  margin: auto;
  margin-top: 5vh;
}
.tab {
  width: 70vw;
  margin: auto;
}
.tab-item {
  border-bottom: solid 1px rgba(0, 0, 0, 0.2);
}
.active {
  border-bottom: solid 1px #845dff;
  color: #865dff;
}
.text-box {
  width: 80vw;
  height: 70%;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translateX(-50%) translateY(-50%);
}
.text {
  font-size: larger;
  color: white;
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
}
.top {
  top: 25%;
}
.middle {
  top: 50%;
}
.bottom {
  top: 75%;
}

.center {
  text-align: center;
}
.img-box {
  width: 100vw;
  height: 40vh;
  position: relative;
}
.img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
</style>
