import { defineConfig } from "vite";

// TODO: เปลี่ยนให้ตรงชื่อ repository ของตนเอง เช่น engse203-lab02-67123456789
const repositoryName = "engse203-student-labs-68543210004";

export default defineConfig({
  base: "./", // <-- แก้บรรทัดนี้จาก `/${repositoryName}/` เป็น "./"
  build: {
    outDir: "docs",
    emptyOutDir: true,
  },
});