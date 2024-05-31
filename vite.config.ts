import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@components": path.resolve(__dirname, "src/components"),
      "@styles": path.resolve(__dirname, "src/styles"),
      "@redux": path.resolve(__dirname, "src/redux"),
      "@views": path.resolve(__dirname, "src/views"),
      "@locales": path.resolve(__dirname, "locales"),
      "@assets": path.resolve(__dirname, "src/assets"),
      "@api": path.resolve(__dirname, "src/api"),
      "@utils": path.resolve(__dirname, "src/utils"),
      "@interface": path.resolve(__dirname, "src/interface"),
      "@dummy-data": path.resolve(__dirname, "dummy-data"),
    },
  },
});
