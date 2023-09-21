import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import vuetify from './plugins/vuetify'
import { loadFonts } from './plugins/webfontloader'

loadFonts()

import firebase from 'firebase/compat/app'
import 'firebase/compat/database'

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCp7lsBrZm8RFiymA8TFp7UhuKLME8klQ8",
  authDomain: "club-masami-project.firebaseapp.com",
  databaseURL: "https://club-masami-project-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "club-masami-project",
  storageBucket: "club-masami-project.appspot.com",
  messagingSenderId: "222282298672",
  appId: "1:222282298672:web:d9114d5b004c6dfca2c4f5",
  measurementId: "G-QJWQH6160J"
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig)
const database = firebase.database()


createApp(App)
  .use(router)
  .use(vuetify)
  .mount('#app')
