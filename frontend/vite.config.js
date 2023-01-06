/* eslint-disable import/no-extraneous-dependencies */
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "node:path";

export default defineConfig({
  envPrefix: "TS",
  resolve: {
    alias: [
      {
        find: "@libs",
        replacement: path.resolve("./src/libs"),
      },
      {
        find: "@styles",
        replacement: path.resolve("./src/styles"),
      },
      {
        find: "@router",
        replacement: path.resolve("./src/router"),
      },
      {
        find: "@components",
        replacement: path.resolve("./src/components"),
      },
      {
        find: "@assets",
        replacement: path.resolve("./src/assets"),
      },
      {
        find: "@hooks",
        replacement: path.resolve("./src/hooks"),
      },
      {
        find: "@pages",
        replacement: path.resolve("./src/pages"),
      },
      {
        find: "@utils",
        replacement: path.resolve("./src/utils"),
      },
      {
        find: "@config",
        replacement: path.resolve("./src/config"),
      },
      {
        find: "@layouts",
        replacement: path.resolve("./src/layouts"),
      },
    ],
  },
  plugins: [react()],
});
