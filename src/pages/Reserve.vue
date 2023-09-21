<template>
  <h1>
    Reserve Page
  </h1>
</template>

<script>
import { get, getDatabase, ref } from 'firebase/database'
export default {
  data () {
    return {

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
  }
}
</script>
