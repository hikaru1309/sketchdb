// 画面が白→黒にちらつかないように、描画の前に配色を決める（ツール画面と紹介ページで共通）。
// セキュリティの設定（CSP）でページ内に直接書いたスクリプトを禁止しているので、別のファイルにしている
;(function () {
  var saved
  try {
    saved = localStorage.getItem('sql-er:theme')
  } catch (e) {}
  var dark = saved ? saved === 'dark' : matchMedia('(prefers-color-scheme: dark)').matches
  document.documentElement.dataset.theme = dark ? 'dark' : 'light'
})()
