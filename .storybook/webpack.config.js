const tsImportPluginFactory = require('ts-import-plugin')

module.exports = {
  module: {
    rules: [
      {
        test: /\.stories\.tsx$/,
        loaders: [
          {
            loader: require.resolve('@storybook/source-loader'),
            options: {
              parser: 'typescript'
            }
          }
        ],
        exclude: /node_modules/
      },
      {
        test: /\.tsx?$/,
        loaders: [
          {
            loader: 'awesome-typescript-loader',
            options: {
              getCustomTransformers: () => ({
                before: [tsImportPluginFactory({ libraryName: 'antd', libraryDirectory: 'lib', style: true })]
              }),
            },
          },
          {
            loader: require.resolve('react-docgen-typescript-loader'),
          },
        ],
        exclude: /node_modules|stories/
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
