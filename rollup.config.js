import rollupPluginBabel from "rollup-plugin-babel";
import serve from "rollup-plugin-serve";
export default {
  input: "./src/index.js",
  output: {
    file: "dist/umd/Vue.js",
  },
  plugins: [
    rollupPluginBabel({
      exclude: "node_modules/**",
    }),
    process.env.NODE_ENV === "development"
      ? serve({
          open: true,
          openPage: "/public/index.html",
          port: 3000,
          contentBase: "",
        })
      : null,
  ],
};
