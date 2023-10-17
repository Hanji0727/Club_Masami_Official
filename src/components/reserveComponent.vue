<template>
  <div class="reserve">
    <v-row>
      <v-col cols="1"/>
      <v-col
        class="center"
        cols="4"
      >
        日時
      </v-col>
      <select
        @change="inputDate($event)"
        required>
        <option value="default">選択してください▽</option>
        <option
          v-for="item in dates"
          :key="item"
          :value="item.value">
          {{ item.text }}
        </option>
      </select>
    </v-row>
    <v-row
      v-for="(item, index) in foods"
      :key="item"
    >
      <v-col cols="1"/>
      <v-col
        class="center"
        cols="4"
      >
        {{ item }}  
      </v-col>
      <select
        @change="inputValue($event, index)" 
        required
      >
        <option value="default">選択してください▽</option>
        <option
          v-for="(i, index) in 11"
          :key="i"
          :value="index"
        >
          {{ index }}
        </option>
      </select>
    </v-row>

    <v-row>
      <v-col
        class="center"
        cols="12"
      >
        <v-btn
          @click="modal = true"
          style="background-color: #845dff;"
        >
          確認する
        </v-btn>
      </v-col>
    </v-row>

    <v-dialog v-model="modal">
      <div class="modal">
        <v-row>
          <v-col
            class="center"
            cols="12"
          >
            {{ text }}
          </v-col>
        </v-row>
      </div>
    </v-dialog>
  </div>
</template>

<script>
export default {
  data () {
    return {
      dates: {
        0: {
          text: '28日(土)',
          value: 28
        },
        1: {
          text: '29日(日)',
          value: 29
        }
      },
      foods: ['プリン', '生チョコ', 'パンケーキ'],
      writeObject: {
        pudding: null,
        rawchoco: null,
        pancake: null
      },
      modal: false,
      text: '以下の内容でよろしいですか？'
    }
  },
  methods: {
    inputDate (event) {
      this.writeObject.date = event.target.value
      console.log(this.writeObject)
    },
    inputValue (event, index) {
      if (index === 0) this.writeObject.pudding = event.target.value
      if (index === 1) this.writeObject.rawchoco = event.target.value
      if (index === 2) this.writeObject.pancake = event.target.value

      console.log(this.writeObject)
    }
  }
}
</script>

<style scoped>
.center {
  text-align: center;
}
.modal{
  width: 80vw;
  height: 40vh;
  margin: auto;
}
</style>
