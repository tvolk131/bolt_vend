import * as path from 'path';
import * as webpack from 'webpack';
const CLIENT_DIR = path.join(__dirname, '/client');
const DIST_DIR = path.join(__dirname, '/client/dist');
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');
// const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

const config: webpack.Configuration = {
  entry: `${CLIENT_DIR}/index.tsx`,
  output: {
    filename: 'bundle.js',
    path: DIST_DIR
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: {
          loader: 'ts-loader',
          options: {
            transpileOnly: true
          }
        }
      },
      {
        test: /\.tsx?$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-typescript'],
            plugins: [
              [
                require('babel-plugin-transform-imports'), {
                  '@material-ui/core': {
                    transform: (importName: string, matches: any) => {
                      return `@material-ui/core/esm/${importName}`;
                    },
                    preventFullImport: true
                  },
                  '@material-ui/icons': {
                    transform: (importName: string, matches: any) => {
                      return `'@material-ui/icons/esm/${importName}`;
                    },
                    preventFullImport: true
                  }
                }
              ]
            ]
          }
        }
      }
    ]
  },
  resolve: {
    extensions: ['.js', '.jsx', '.ts', '.tsx', '.json']
  },
  plugins: [
    new ForkTsCheckerWebpackPlugin()
    // new BundleAnalyzerPlugin() // Uncomment for bundle analysis
  ]
};

export default config;
