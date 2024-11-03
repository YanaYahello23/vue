const path = require("path");
const webpack = require("webpack");

const config = {
  entry: {
    app: path.resolve(__dirname, "../src/client-entry.js")
  },
  mode: 'development',
  resolve: {
    alias: {
      vue$: "vue/dist/vue.esm-bundler.js"
    }
  },
  output: {
    path: path.resolve(__dirname, "../dist"),
    publicPath: "/",
    filename: "assets/js/[name].js"
  },
  plugins: [
    new webpack.DefinePlugin({
      __VUE_OPTIONS_API__: 'true',
      __VUE_PROD_DEVTOOLS__: 'false',
      __VUE_PROD_HYDRATION_MISMATCH_DETAILS__: 'false'
    })
  ],
}

module.exports = config;
