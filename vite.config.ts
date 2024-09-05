import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import {createStyleImportPlugin} from 'vite-plugin-style-import'


// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    createStyleImportPlugin({
      libs: [
        {
          libraryName: '@arco-design/web-vue',
          esModule: true,
          ensureStyleFile: true,
          resolveStyle: (name) => {
            return `@arco-design/web-vue/es/${name}/style/css.js`;
          },
        },
      ],
    }),
  ],
})
