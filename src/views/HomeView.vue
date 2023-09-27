<template>
  <router-view />
</template>

<script>
import { defineComponent } from 'vue';

// Components
import HelloWorld from '../components/HelloWorld.vue';
import MyHeader from '@/components/MyHeader.vue'

export default defineComponent({
  name: 'HomeView',

  components: {
    HelloWorld,
    MyHeader,
  },
});
</script>

<style scoped>
.link {
  text-decoration: none;
}
</style>
