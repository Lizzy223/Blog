import  { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
// import Flutterwave from  'flutterwave-vue-v3'
import "./assets/main.css";

//Vue.use(Flutterwave, { publicKey: 'FLWPUBK_TEST-8f53b911b8ddc4ea5d25a10957c06058-X' } )

const app = createApp(App);

app.use(router);

app.mount("#app");
