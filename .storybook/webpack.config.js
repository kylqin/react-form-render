const tsImportPluginFactory = require('ts-import-plugin')

module.exports = {
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: 'awesome-typescript-loader',
        options: {
          getCustomTransformers: () => ({
            before: [tsImportPluginFactory({ libraryName: 'antd', libraryDirectory: 'lib', style: true })]
          }),
        },
        exclude: /node_modules/
      },
      { test: /\.css$/, use: ['style-loader', 'css-loader'] },
      {
        test: /\.less$/,
        use: [
          'style-loader',
          'css-loader',
          {
            loader: 'less-loader',
            options: { javascriptEnabled : true }
          }
        ]
      }
    ]
  }
};
