const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  lintOnSave: false,
  css: {
    loaderOptions: {
      sass: {
        additionalData: `@import "src/assets/scss/_variables";`,
      },
    },
  },
  // configureWebpack: config => {
  //   config.module = {
  //       rules: [
  //           {
  //               test: /\.vue$/,
  //               use: [
  //                   'vue-loader',
  //               ],
  //           },
  //           {
  //               test: /\.s?css$/,
  //               use: [
  //                   'vue-style-loader',
  //                   'css-loader',
  //                   {
  //                     loader: 'sass-loader',
  //                     options: {
  //                       additionalData: '@import "src/assets/scss/main";',

  //                     }
  //                 }
  //               ],
  //           },
  //           // {
  //           //   test: /\.(png|jpe?g|gif|webp)$/,
  //           //   use: [
  //           //     'file-loader'
  //           //   ]
  //           // }
  //       ]
  //   };
  // }
})
