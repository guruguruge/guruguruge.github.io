// ここでHTMLの要素を取得します
const typewriterElement = document.getElementById('typewriter');

// 表示したいテキストをここに書きます
const textToType = "hello world!";

// 何文字目を表示しているかを覚えておくための変数
let charIndex = 0;

// タイプライター処理を実装する関数
function type() {
  // テキストの長さよりインデックスが小さい場合（まだ表示する文字が残っている場合）
  if (charIndex < textToType.length) {
    // 現在のテキストに次の1文字を追加します
    typewriterElement.textContent += textToType.charAt(charIndex);
    // 次の文字へインデックスを移動します
    charIndex++;
    // 次の文字を表示するまでの待機時間（ミリ秒単位）。この数値を小さくすると速くなります。
    setTimeout(type, 150);
  }
}

// ページが読み込まれたら、type関数を実行してアニメーションを開始します
document.addEventListener('DOMContentLoaded', type);