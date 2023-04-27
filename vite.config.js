import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "/mofus/",
<<<<<<< HEAD
  resolve: {
    extensions: [".mjs", ".js", ".ts", ".jsx", ".tsx", ".json"],
  },
=======
>>>>>>> a01277aab862eaf22df990aa41ba6dde1e568450
});
