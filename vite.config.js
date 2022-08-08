import { fileURLToPath, URL } from 'url'
import { defineConfig, loadEnv } from 'vite'

import vue from '@vitejs/plugin-vue'

export default defineConfig(({ command, mode }) => {
  const env = loadEnv(mode, process.cwd(), '');

  return {
    define: {
      __APP_ENV__: env.APP_ENV
    },
    plugins: [vue()],
    resolve: {
      alias: {
        '@': fileURLToPath(new URL('./src', import.meta.url))
      },
    },
    server: {
      proxy: {
        '/api': {
          //target: env.VITE_NOTES_URL,
          target: "http://24.17.206.63:8000/",
          changeOrigin: true,
        }
      }
    }
  }
});