import { defineConfig } from 'vite'

export default defineConfig({
  base: './',
  build: {
    outDir: 'docs', // <-- บังคับให้สร้างไฟล์ไปไว้ที่โฟลเดอร์ docs
  }
})