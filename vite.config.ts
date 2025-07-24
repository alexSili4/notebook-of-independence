import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import svgr from 'vite-plugin-svgr';

export default defineConfig({
  plugins: [react(), svgr()],
  resolve: {
    alias: {
      '@': '/src',
      '@GeneralComponents': '/src/components/General',
      '@MainPageComponents': '/src/components/MainPage',
      // animations
      '@AnimatedMainPageComponents': '/src/components/Animated/Main',
      '@AnimatedGeneralComponents': '/src/components/Animated/General',
    },
  },
  build: {
    emptyOutDir: true,
    rollupOptions: {
      output: {
        chunkFileNames: 'dist/js/[name].js',
        entryFileNames: 'dist/js/[name].js',
        assetFileNames: (assetInfo) => {
          const fileName = assetInfo.name || '';

          if (fileName.endsWith('.js')) {
            return 'dist/js/[name][extname]';
          }

          if (fileName.endsWith('.css')) {
            return 'dist/css/[name][extname]';
          }

          if (fileName.endsWith('.ttf')) {
            return 'dist/fonts/[name][extname]';
          }

          if (fileName.endsWith('.mp4')) {
            return 'dist/video/[name][extname]';
          }

          if (fileName.endsWith('.jpg') || fileName.endsWith('.png')) {
            return 'dist/images/[name][extname]';
          }

          return 'dist/[name][extname]';
        },
      },
    },
  },
});
