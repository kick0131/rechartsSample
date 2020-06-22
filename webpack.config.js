const path = require('path');

// [定数] webpack の出力オプションを指定します
// 'production' か 'development' を指定
const MODE = "development";

// ソースマップの利用有無(productionのときはソースマップを利用しない)
const enabledSourceMap = MODE === "development";

module.exports = {
  // モード値を production に設定すると最適化された状態で、
  // development に設定するとソースマップ有効でJSファイルが出力される
  mode: MODE,

  // ローカル開発用環境を立ち上げる
  // 実行時にブラウザが自動的に localhost を開く
  devServer: {
    contentBase: "dist",
    open: true
  },
  // メインとなるJavaScriptファイル（エントリーポイント）
  entry: path.resolve(__dirname, 'src/js/index.js'),
  // ファイルの出力設定
  output: {
    //  出力ファイルのディレクトリ名
    path: path.resolve(__dirname, 'dist'),
    // 出力ファイル名
    filename: 'bundle.js'
  },
  module: {
    rules: [
      { 
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',   //loader名
          options: {                //Babelの設定
            presets: [
              // プリセットを指定することで、ES2020 を ES5 に変換
              '@babel/preset-env',
              // React の JSX を解釈
              "@babel/react"
            ]
          }
        }
      }
    ]
  }
};