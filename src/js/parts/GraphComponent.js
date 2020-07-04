// ラインチャート用データセット
export class GraphData {
  constructor() {
    // グラフタイトル
    this.chartTitle = '';
    // グラフ表示データ,X軸キー名
    this.chartData = '';
    this.chartKey = '';
    // グラフ1_グラフ名,グラフキー名
    this.g1name = '';
    this.g1key = '';
    // グラフ2_グラフ名,グラフキー名
    this.g2name = '';
    this.g2key = '';
    // グラフ3_グラフ名,グラフキー名
    this.g3name = '';
    this.g3key = '';
    // グラフ4_グラフ名,グラフキー名
    this.g4name = '';
    this.g4key = '';
    // X軸項目
    this.ticks = [];
    // X軸表示間隔
    this.interval = 'preserveEnd';

    // === 以下、typeがnumberの時のみ有効

    // 表示範囲
    this.domain = null;
    // X軸のラベル変換関数
    this.tickFormatter = null;
    // X軸表示内容
    this.ticks = null;
  }
}

// DatePickerで取得したDate型をグラフのキー項目のフォーマット(MM/dd)に変換する
export const formatDatePickerDate = (date) => {
  var formatDate = new Date(date);
  return (formatDate.getMonth() + 1) + '/' + (formatDate.getDate())
}

