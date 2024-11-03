const webpack = require("webpack");
const clientConfig = require("./webpack.base.config");


module.exports = function setupDevServer(app) {
  const clintCompiler = webpack(clientConfig);
  app.use(
    require("webpack-dev-middleware")(clintCompiler, {
      stats: {
        colors: true,
      }
    })
  )
  app.use(require("webpack-hot-middleware")(clintCompiler));
}
