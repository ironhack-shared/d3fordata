import node from "rollup-plugin-node-resolve";

export default {
  entry: "js/main.js",
  format: "umd",
  moduleName: "d3",
  plugins: [node()],
  dest: "js/bundle.js",
  onwarn: function ( message ) {
    if ( /CIRCULAR_DEPENDENCY/.test( message.code ) ) return;
    console.error( message );
  }
};