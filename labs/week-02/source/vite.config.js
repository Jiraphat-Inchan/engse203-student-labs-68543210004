import { defineConfig } from 'vite'

export default defineConfig({
  base: './', // <-- เพิ่มบรรทัดนี้ลงไป
  build: {
    outDir: 'docs' // หรือ dist ตามที่โปรเจกต์ตั้งไว้
  }
})