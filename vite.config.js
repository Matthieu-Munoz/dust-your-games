import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";
import svgr from "@honkhonk/vite-plugin-svgr";

export default defineConfig({
  resolve: {
    alias: {
      src: path.resolve(__dirname, "./src"),
      Actions: path.resolve(__dirname, "./src/actions"),
      Reducers: path.resolve(__dirname, "./src/reducers"),
      Middlewares: path.resolve(__dirname, "./src/middlewares"),
      Assets: path.resolve(__dirname, "./src/assets"),
      Data: path.resolve(__dirname, "./src/data"),
      Components: path.resolve(__dirname, "./src/components"),
      Styles: path.resolve(__dirname, "./src/styles"),
    },
  },
  plugins: [react(), svgr()],
});
