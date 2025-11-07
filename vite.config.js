import { defineConfig } from 'vite';
import solid from 'vite-plugin-solid';

export default defineConfig({
  plugins: [solid()],
  base: './', // 使用相对路径，支持子目录部署
  build: {
    target: 'esnext',
  },
});
