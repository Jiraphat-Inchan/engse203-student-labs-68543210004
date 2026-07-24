import { defineConfig } from "vite";

export default defineConfig({
  base: "./", // <-- ต้องเป็น "./" เท่านั้น ห้ามใส่ชื่อ repository
  build: {
    outDir: "docs",
    emptyOutDir: true,
  },
});