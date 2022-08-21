import { createApp } from 'vue';
import { createPinia } from 'pinia';

import App from './App.vue';
import router from './router';

import { QuillEditor } from '@vueup/vue-quill';
import '@vueup/vue-quill/dist/vue-quill.snow.css';

import Markdown from 'vue3-markdown-it';

const app = createApp(App);

app.component('QuillEditor', QuillEditor);
app.component('Markdown', Markdown);

app.use(createPinia());
app.use(router);

app.mount('#app');
