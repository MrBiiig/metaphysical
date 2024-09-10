import { defineConfig } from "vite";
import legacy from "@vitejs/plugin-legacy";
import vue from "@vitejs/plugin-vue";
import { createStyleImportPlugin } from "vite-plugin-style-import";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    legacy({
      targets: ["defaults", "not IE 11"],
    }),
    createStyleImportPlugin({
      libs: [
        {
          libraryName: "@arco-design/web-vue",
          esModule: true,
          ensureStyleFile: true,
          resolveStyle: (name) => {
            return `@arco-design/web-vue/es/${name}/style/css.js`;
          },
        },
      ],
    }),
  ],
  resolve: {
    alias: {
      "@": "/src",
    },
  },
});
