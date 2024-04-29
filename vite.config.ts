import { defineConfig } from "vite";
import EnvironmentPlugin from "vite-plugin-environment";
import react from "@vitejs/plugin-react";
import * as path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), EnvironmentPlugin("all")],
  resolve: {
    alias: [
      {
        find: "@",
        replacement: path.resolve(__dirname, "src"),
      },
      {
        find: "@components",
        replacement: path.resolve(__dirname, "src/components"),
      },
      {
        find: "@shared",
        replacement: path.resolve(__dirname, "src/shared"),
      },
    ],
  },
});
