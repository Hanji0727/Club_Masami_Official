<template>
  <header>
    <v-app-bar
      prominent>
      <v-app-bar-title class="title">Club Masami</v-app-bar-title>
      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>
    </v-app-bar>

    <v-navigation-drawer
      v-model="drawer"
      fixed
      temporary
      width="100vw"
    >
      <div style="width: 100vw;">
        <v-row
          class="drawer-items"
          v-for="item in drawerItems"
          :key="item"
        >
          <router-link
            :to="'/' + item"
            class="link"
          >
            <v-col cols="12" class="center">
              {{ item }}
            </v-col>
          </router-link>
        </v-row>
      </div>
    </v-navigation-drawer>
  </header>
</template>

<script>
export default {
  data () {
    return {
      drawer: false,
      drawerItems: ['about', 'staff', 'menu', 'reserve', 'access']
    }
  },
  methods: {
    onClick () {
    }
  }
}
</script>

<style scoped>
.center {
  text-align: center;
}
.drawer-items {
  height: 10vh;
  top: 50%;
  display: inline;
}
.link {
  text-decoration: none;
  color: inherit;
}
</style>
