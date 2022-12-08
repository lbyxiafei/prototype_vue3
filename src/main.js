import { createApp } from 'vue';
import { createPinia } from 'pinia';

import App from './App.vue';
import router from './router';

import VMdEditor from '@kangc/v-md-editor';
import '@kangc/v-md-editor/lib/style/base-editor.css';
import githubTheme from '@kangc/v-md-editor/lib/theme/github.js';
import '@kangc/v-md-editor/lib/theme/style/github.css';
// highlightjs
import hljs from 'highlight.js';

const app = createApp(App);

VMdEditor.use(githubTheme, {
  Hljs: hljs,
});
app.use(VMdEditor);

app.use(createPinia());
app.use(router);

app.mount('#app');
