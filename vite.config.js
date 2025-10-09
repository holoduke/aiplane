import { defineConfig } from 'vite'

export default defineConfig({
  root: '.',
  publicDir: 'public',
  build: {
    target: 'esnext',
    outDir: 'dist',
    assetsDir: 'assets'
  },
  server: {
    port: 3000,
    open: true
  },
  resolve: {
    alias: {
      'three': 'three',
      'detector': '/js/lib/Detector.js',
      'stats': '/js/lib/stats.min.js',
      'ImprovedNoise': '/js/lib/ImprovedNoise.js'
    }
  }
})