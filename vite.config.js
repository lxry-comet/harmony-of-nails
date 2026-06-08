import { defineConfig } from 'vite';
import glob from 'glob';
import injectHTML from 'vite-plugin-html-inject';
import FullReload from 'vite-plugin-full-reload';
import { resolve } from 'path'; // 👈 Додаємо вбудований модуль path

export default defineConfig({
  base: '/harmony-of-nails/', 
  root: 'src',
  build: {
    rollupOptions: {
      // 🚀 Перетворюємо всі знайдені шляхи на абсолютні за допомогою resolve()
      input: glob.sync('./src/**/*.html').map(file => resolve(file)),
    },
    outDir: '../dist', // Зберігаємо збірку на рівень вище папки src
  },
  plugins: [injectHTML(), FullReload(['./src/**/**.html'])],
});