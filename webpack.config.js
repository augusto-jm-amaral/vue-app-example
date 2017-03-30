var webpack           = require('webpack'),
    HtmlWebpackPlugin = require('html-webpack-plugin'),
    path              = require('path');

var PROD = JSON.parse(process.env.PROD_ENV || '0');

var htmlConf = new HtmlWebpackPlugin({
      title: 'Vue App',
      template: 'src/index.ejs', // Load a custom template (ejs by default see the FAQ for details) 
      filename: 'dist/index.html'
    });

module.exports = [{
  name: 'Bundle JS',
  entry: ['./src/index.js'],
  output: {
    filename: PROD ? './dist/bundle.min.js' : './dist/bundle.js'
  },
  plugins: PROD ? [
    new webpack.optimize.UglifyJsPlugin({
      compress: { warnings: false }
    }),
    htmlConf
  ] : [
    htmlConf
  ],
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel-loader',
      },
      {
        test: /\.vue$/,
        loader: 'vue-loader'
      }
    ]
  },
  devServer: {
    contentBase: path.join(__dirname, "dist"),
    compress: true
  },
  resolve: {
      alias: { 'vue' : '../node_modules/vue/dist/vue.min.js'}
  }
}];

  // entry: ['./src/index.js', './src/scss/main.scss'],
    // {
    //   test: /\.scss$/,
    //   use: [{
    //       loader: "style-loader" // creates style nodes from JS strings
    //   }, {
    //       loader: "css-loader" // translates CSS into CommonJS
    //   }, {
    //       loader: "sass-loader" // compiles Sass to CSS
    //   }]
    // },