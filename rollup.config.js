import node from "rollup-plugin-node-resolve";

export default {
  entry: "js/main.js",
  format: "umd",
  moduleName: "d3",
  plugins: [node()],
  dest: "js/bundle.js"
};