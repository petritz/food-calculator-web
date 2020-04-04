// eslint-disable-next-line @typescript-eslint/no-var-requires
const path = require("path");

module.exports = {
  lintOnSave: false,

  publicPath:
    process.env.NODE_ENV === "production" ? "/food-calculator-web/" : "/",

  pluginOptions: {
    "style-resources-loader": {
      preProcessor: "scss",
      patterns: [path.resolve(__dirname, "./src/assets/styles/*.scss")]
    }
  }
};
