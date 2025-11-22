import { defineConfig } from "tsup";

export default defineConfig({
  entry: ["src/index.ts"],
  format: ["cjs", "esm"], // Build ra cả 2 chuẩn để Nest và Next đều vui
  dts: true, // Tự tạo file .d.ts
  clean: true,
});
