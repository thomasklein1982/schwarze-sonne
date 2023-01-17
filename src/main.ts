import { createApp } from 'vue'
import './style.css'
import App from './App.vue';
import PrimeVue from 'primevue/config';
import Button from 'primevue/button';
import { abilities } from './classes/Ability';
import { items } from './classes/Item';
import { weapons } from './classes/Weapon';
import { specialItems } from './classes/SpecialItem';
import { clothes } from './classes/Clothing';
import 'primevue/resources/themes/vela-orange/theme.css';
import 'primevue/resources/primevue.min.css';
import 'primeicons/primeicons.css';
import {createRouter,createWebHistory} from 'vue-router';

const app=createApp(App);
app.use(PrimeVue);
app.use(createRouter({routes: [], history: createWebHistory()}));
app.mount('#app');
app.component('Button',Button);

for(let a of abilities){
  console.log(a);
}

for(let i of items){
  console.log(i);
}

for(let w of weapons){
  console.log(w);
}

for(let s of specialItems){
  console.log(s);
}

for (const c of clothes) {
  console.log(c);
}