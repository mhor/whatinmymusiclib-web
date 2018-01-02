import path from 'path';
import nodeExternals from 'webpack-node-externals';

const client = {
  entry: {
    js: './public/app-client.js',
  },
  output: {
    path: path.join(__dirname, 'public', 'static', 'js'),
    filename: 'bundle.js',
  },
  module: {
    rules: [
      {
        test: path.join(__dirname, 'public'),
        use: {
          loader: 'babel-loader',
          options: 'cacheDirectory=.babel_cache',
        },
      },
    ],
  },
};

const server = {
  target: 'node',
  node: {
    __dirname: false,
  },
  externals: [nodeExternals({
    modulesFromFile: true,
  })],
  entry: {
    js: './app/server.js',
  },
  output: {
    path: path.join(__dirname, 'app'),
    filename: 'server-es5.js',
    libraryTarget: 'commonjs2',
  },
  module: {
    rules: [
      {
        test: path.join(__dirname, 'app'),
        use: {
          loader: 'babel-loader',
          options: 'cacheDirectory=.babel_cache',
        },
      },
    ],
  },
};

export default [client, server];
