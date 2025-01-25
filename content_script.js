// 1. サイドメニューのアイコンを削除
document.querySelectorAll('.lms-icon, .task-icon, .online-icon, .search-icon, .link-icon').forEach(element => {
  element.style.backgroundImage = 'none';
});

// 2. サイドメニューの背景色と文字を変更
document.querySelectorAll('.sidemenu-lms-color, .sidemenu-course-search-color').forEach(element => {
  element.style.backgroundColor = 'rgb(5, 69, 141)'; // ヘッダーの「時間割」の背景と同じ色に
  element.style.color = '#fff';
});

// 3. サイドメニューのテキストを左に寄せる
document.querySelectorAll('.sidemenu-lms-link').forEach(element => {
  element.style.padding = '12px 5px 12px 30px'; // paddingを設定（4つ目のみ30pxに変更）
});

// 4. 全ての影を削除
document.querySelectorAll("*").forEach((element) => {
  element.style.boxShadow = "none"; 
});

// 5. フォントを変更
document.querySelectorAll("*").forEach((element) => {
  element.style.fontFamily = 
  '"Noto Sans JP", "ヒラギノ角ゴ Pro W3", "Hiragino Kaku Gothic Pro", メイリオ, Meiryo, "ＭＳ Ｐゴシック", "MS P Gothic", Verdana, sans-serif, Arial, Helvetica, Gothic';
});

// 6. 時限のところの背景色と文字の色を変更
document.querySelectorAll('.div-table-colomn-period-color').forEach(element => {
  element.style.backgroundColor = 'rgb(5, 69, 141)'; // ヘッダーの「時間割」の背景と同じ色に
  element.style.color = '#fff'; // 白色
});

// 7. トップボタンの背景色と枠線色を変更
document.querySelectorAll('.page-top-btn').forEach(element => {
  element.style.backgroundColor = '#9DB2DC'; // 授業名の背景と同じ色に
  element.style.borderColor = '#9DB2DC';
});



