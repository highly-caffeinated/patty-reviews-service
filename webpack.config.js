const path = require('path');

module.exports = {
  entry: './client/index.jsx',
  output: {
    filename: 'reviews.js',
    path: path.resolve(__dirname, 'public'),
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          // [style-loader](/loaders/style-loader)
          { loader: 'style-loader' },
          // [css-loader](/loaders/css-loader)
          {
            loader: 'css-loader',
          },
        ]
      },
      {
        test: /\.(js|jsx)$/,
        exclude: [/(node_modules)/, /(CSV)/],
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              ['@babel/preset-env'],
              ['@babel/preset-react'],
            ],
          },
        },
      },
    ],
  },
  mode: 'production',
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  watch: true,
};


