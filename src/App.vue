<template>
  <v-app app>
    <v-main>
      <MyHeader />
      <router-view />
      <myFooter />
    </v-main>
  </v-app>
</template>

<script>
// Components
import HelloWorld from '@/components/HelloWorld.vue'
import MyHeader from '@/components/MyHeader.vue'
import MyFooter from '@/components/MyFooter.vue'

export default {
  name: 'App',

  components: {
    HelloWorld,
    MyHeader,
    MyFooter,
  },

  data: () => ({
    //
  }),
}
</script>
