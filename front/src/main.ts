import { createApp } from 'vue';
import './tailwind.scss';
import App from './App.vue';
import { createRouter, createWebHistory } from 'vue-router/auto';
import { createHead } from '@vueuse/head';



const app = createApp(App);
const head = createHead();

const router = createRouter({
  history: createWebHistory(),
  scrollBehavior(to, from, savedPosition) {
    // always scroll to top
    return { 
      top: 0,
      behavior: 'auto' 
    }
  }
});



app.use(router);
app.use(head);
app.mount(document.body);
