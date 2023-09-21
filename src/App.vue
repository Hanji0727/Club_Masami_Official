<template>
  <v-app app>
    <v-main>
      <MyHeader />
      <router-view/>
    </v-main>
  </v-app>
</template>

<script>
// Components
import HelloWorld from '@/components/HelloWorld.vue'
import MyHeader from '@/components/MyHeader.vue'

export default {
  name: 'App',

  components: {
    HelloWorld,
    MyHeader,
  },

  data: () => ({
    //
  }),
}
</script>
