// ============================================
// ローディング画面制御
// ============================================

// セッション中に一度表示したかチェック（ページ読み込み前に実行）
const hasShownLoading = sessionStorage.getItem('hasShownLoading');
if (hasShownLoading) {
  // 2回目以降の訪問時はローディング画面を非表示にする（HTMLがレンダリングされる前）
  const style = document.createElement('style');
  style.textContent = '#loading-screen { display: none !important; }';
  document.head.appendChild(style);
}

window.addEventListener('load', () => {
  const loadingScreen = document.getElementById('loading-screen');
  if (loadingScreen && !hasShownLoading) {
    // 初回表示の場合は最低2秒表示してから消す
    setTimeout(() => {
      loadingScreen.classList.add('fade-out');
      // アニメーション完了後に要素を削除
      setTimeout(() => {
        loadingScreen.remove();
        // セッションストレージに記録
        sessionStorage.setItem('hasShownLoading', 'true');
      }, 800);
    }, 2000);
  }
});
