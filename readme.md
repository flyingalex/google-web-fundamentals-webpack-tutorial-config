### Google [Web Fundamentals](https://developers.google.com/web/fundamentals/) Webpack Config

Google publish a [tutorial(Web Performance Optimization with Webpack)](https://developers.google.com/web/fundamentals/performance/webpack/) for webpack  lately, I think should be treadted as a
best practice for the webpack optimization config.

I wrote a config to include most of the tools google mentioned in there.Feel
free to PR to make this config better.

##### This repo is a demo for the config.

### How to run this porject:

```
npm install
npm run watch
npm run start // open the webpack-dev-server


```


### webpack.config.js content:

```
module.exports = {
  entry: {
    main: './src/js/index.jsx',
  },

  output: {
    path: path.join(ROOT, '/public'),
    filename: 'assets/js/[name].[chunkhash].js',
    publicPath: '/',
  },
  watch: true,
  devServer: {
    historyApiFallback: true,
    contentBase: './public'
  },
  module: {
    rules: [
      {
        test: /js[x]?$/,
        exclude: /node_modules/,
        use: ['babel-loader'],
      },
      {
        test: /\.css$/,
        use: [
          'style-loader',
          { loader: 'css-loader', options: { minimize: true } },
        ],
      },
      {
        test: /\.(jpe?g|png|gif)$/,
        loader: 'url-loader',
        options: {
          name: 'assets/images/[name].[ext]',
          // Inline files smaller than 10 kB (10240 bytes)
          limit: 10 * 1024,
        },
      },
      {
        test: /\.svg$/,
        loader: 'svg-url-loader',
        options: {
          // Inline files smaller than 10 kB (10240 bytes)
          limit: 10 * 1024,
          // Remove the quotes from the url
          // (they’re unnecessary in most cases)
          noquotes: true,
        },
      },
      {
        test: /\.(jpe?g|png|gif|svg)$/,
        loader: 'image-webpack-loader',
        // This will apply the loader before the other ones
        enforce: 'pre',
      },
    ]
  },
  resolve: {
     extensions: [".js", ".json", ".jsx", ".css"],
  },
  plugins: [
    // new webpack.optimize.UglifyJsPlugin(), // this one didn't compile the es2015 featrue
    // new UglifyJsPlugin(), // for new es feature
    
    // remove environment check on production for decrease the library size
    // new webpack.DefinePlugin({
    //   'process.env.NODE_ENV': '"production"',
    // }),
    
    // includes all codes in one module
    new webpack.optimize.ModuleConcatenationPlugin(),

    // clean the repeated hash file
    new CleanWebpackPlugin([
      path.join(ROOT, '/public/assets/js'),
    ]),

    new webpack.optimize.CommonsChunkPlugin({
      // A name of the chunk that will include the dependencies.
      // This name is substituted in place of [name] from step 1
      name: 'vendor',

      // A function that determines which modules to include into this chunk
      minChunks: module => module.context &&
        module.context.includes('node_modules'),
    }),

    // This plugin must come after the vendor one (because webpack
    // includes runtime into the last chunk)
    new webpack.optimize.CommonsChunkPlugin({
      name: 'runtime',

      // minChunks: Infinity means that no app modules
      // will be included into this chunk
      minChunks: Infinity,
    }),

    new InlineChunkWebpackPlugin({
        inlineChunks: ['runtime']
    }),

    new HtmlWebpackPlugin({
      template: './src/index.html',
    }),

    // Make module ids more stable
    new webpack.HashedModuleIdsPlugin(),

    // Keep track of the bundle size
    // new DashboardPlugin(),

    // Analyze why the bundle is so large
    new BundleAnalyzerPlugin(),
  ]
};
```
