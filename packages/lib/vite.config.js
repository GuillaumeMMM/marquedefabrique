import { defineConfig } from 'vite';
import { viteStaticCopy } from 'vite-plugin-static-copy';
import { readFileSync } from 'node:fs';

const pkg = JSON.parse(readFileSync('./package.json', 'utf-8'));

export default defineConfig({
  plugins: [
    viteStaticCopy({
      targets: [
        { src: 'src/**/*.css', dest: 'css', rename: { stripBase: true } },
      ],
    }),
  ],
  define: {
    __MDF_VERSION__: JSON.stringify(pkg.version),
  },
  build: {
    lib: {
      entry: 'src/index.js',
      name: 'mdf',
      fileName: 'js/kit',
      formats: ['es'],
    }
  },
});