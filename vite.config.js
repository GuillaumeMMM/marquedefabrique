import { defineConfig } from 'vite';
import { viteStaticCopy } from 'vite-plugin-static-copy';

export default defineConfig({
  plugins: [
    viteStaticCopy({
      targets: [
        { src: 'src/**.css', dest: 'css' },
      ],
    }),
  ],
  build: {
    lib: {
      entry: 'src/index.js',
      name: 'mdf',
      fileName: 'js/kit',
      formats: ['es'],
    }
  },
  server: {
    fs: {
      allow: ['./src', './examples'],
    },
  },
});