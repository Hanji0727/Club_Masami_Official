<template>
  <div class="wrap">
    <div class="notice">
      <v-row>
        <v-col
          class="center mainText mt-5"
          cols="12"
        >
          お知らせ
        </v-col>
      </v-row>
      <v-row>
        <v-col
          class="center"
          cols="12"
          style="white-space: pre-line;"
        >
          {{ text }}
        </v-col>
      </v-row>
    </div>

    <div class="tab">
      <v-row>
        <router-link
          v-for="item in items"
          :key="item"
          :to="'/reserve/' + item.src"
          class="link"
        >
          <v-col
            :id="item"
            cols="6"
            class="center px-0 tab-item"
          >
            {{ item.name }}
          </v-col>
        </router-link>
      </v-row>
    </div>

    <router-view />
  </div>
  
</template>

<script>
import { get, getDatabase, ref } from 'firebase/database'
export default {
  data () {
    return {
      text: `衛生面や調理の都合により
             スイーツの数に限りがございます。
             
             確実に召し上がって頂くには
             下記のフォームから
             ご予約をおすすめします
             
             ※予約は前日まで受け付けます`,
      items: {
        0: {
          name: '予約',
          src: 'reserveComponent'
        },
        1: {
          name: '確認/削除',
          src: 'confirmComponent'
        }
      }

    }
  },
  mounted () {
    const db = getDatabase()
    const dbRef = ref(db, 'table')
    get(dbRef).then((snapshot) => {
      if (snapshot.exists()) {
        console.log(snapshot.val())
      }
    })
    const ID = 10001
    console.log(ID)
  }
}
</script>

<style scoped>
.wrap {
  overflow: hidden;
}
.center {
  text-align: center;
}
.mainText {
  font-size: xx-large;
}
.link {
  text-decoration: none;
  width: 33%;
  text-align: center;
  margin: 0;
  display: contents;
  color: black;
}
.tab {
  width: 70vw;
  margin: auto;
}
.tab-item {
  border-bottom: solid 1px rgba(0, 0, 0, 0.2);
}
</style>
