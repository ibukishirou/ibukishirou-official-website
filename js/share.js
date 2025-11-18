// シェアボタン機能
(function() {
  // シェアボタンのHTML
  const shareButtonsHTML = `
    <div class="share-buttons">
      <a href="#" class="share-btn twitter" title="Twitterでシェア" aria-label="Twitterでシェア">
        <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
        </svg>
      </a>
      <a href="#" class="share-btn line" title="LINEでシェア" aria-label="LINEでシェア">
        <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path d="M19.365 9.863c.349 0 .63.285.63.631c0 .345-.281.63-.63.63H17.61v1.125h1.755c.349 0 .63.283.63.63c0 .344-.281.629-.63.629h-2.386c-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.63-.63h2.386c.346 0 .627.285.627.63c0 .349-.281.63-.63.63H17.61v1.125h1.755zm-3.855 3.016c0 .27-.174.51-.432.596c-.064.021-.133.031-.199.031c-.211 0-.391-.09-.51-.25l-2.443-3.317v2.94c0 .344-.279.629-.631.629c-.346 0-.626-.285-.626-.629V8.108c0-.27.173-.51.43-.595c.06-.023.136-.033.194-.033c.195 0 .375.104.495.254l2.462 3.33V8.108c0-.345.282-.63.63-.63c.345 0 .63.285.63.63v4.771zm-5.741 0c0 .344-.282.629-.631.629c-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.63-.63c.346 0 .628.285.628.63v4.771zm-2.466.629H4.917c-.345 0-.63-.285-.63-.629V8.108c0-.345.285-.63.63-.63c.348 0 .63.285.63.63v4.141h1.756c.348 0 .629.283.629.63c0 .344-.282.629-.629.629M24 10.314C24 4.943 18.615.572 12 .572S0 4.943 0 10.314c0 4.811 4.27 8.842 10.035 9.608c.391.082.923.258 1.058.59c.12.301.079.766.038 1.08l-.164 1.02c-.045.301-.24 1.186 1.049.645c1.291-.539 6.916-4.078 9.436-6.975C23.176 14.393 24 12.458 24 10.314"/>
        </svg>
      </a>
      <a href="#" class="share-btn url-copy" title="URLをコピー" aria-label="URLをコピー">
        <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="currentColor">
          <path d="M10.59,13.41C11,13.8 11,14.44 10.59,14.83C10.2,15.22 9.56,15.22 9.17,14.83C7.22,12.88 7.22,9.71 9.17,7.76V7.76L12.71,4.22C14.66,2.27 17.83,2.27 19.78,4.22C21.73,6.17 21.73,9.34 19.78,11.29L18.29,12.78C18.3,11.96 18.17,11.14 17.89,10.36L18.36,9.88C19.54,8.71 19.54,6.81 18.36,5.64C17.19,4.46 15.29,4.46 14.12,5.64L10.59,9.17C9.41,10.34 9.41,12.24 10.59,13.41M13.41,9.17C13.8,8.78 14.44,8.78 14.83,9.17C16.78,11.12 16.78,14.29 14.83,16.24V16.24L11.29,19.78C9.34,21.73 6.17,21.73 4.22,19.78C2.27,17.83 2.27,14.66 4.22,12.71L5.71,11.22C5.7,12.04 5.83,12.86 6.11,13.65L5.64,14.12C4.46,15.29 4.46,17.19 5.64,18.36C6.81,19.54 8.71,19.54 9.88,18.36L13.41,14.83C14.59,13.66 14.59,11.76 13.41,10.59C13,10.2 13,9.56 13.41,9.17Z" />
        </svg>
      </a>
    </div>
  `;
  
  // ページ読み込み時にシェアボタンを追加
  function initShareButtons() {
    // bodyの最後にシェアボタンを追加
    document.body.insertAdjacentHTML('beforeend', shareButtonsHTML);
    
    // 各ボタンにイベントリスナーを設定
    const shareButtons = document.querySelectorAll('.share-btn');
    shareButtons.forEach(btn => {
      btn.addEventListener('click', handleShare);
    });
  }
  
  // シェア処理
  function handleShare(e) {
    e.preventDefault();
    
    const currentUrl = encodeURIComponent(window.location.href);
    const pageTitle = encodeURIComponent(document.title);
    
    if (this.classList.contains('twitter')) {
      // Twitterシェア
      const twitterUrl = `https://twitter.com/intent/tweet?text=${pageTitle}&url=${currentUrl}`;
      window.open(twitterUrl, '_blank', 'width=600,height=400');
    } else if (this.classList.contains('line')) {
      // LINEシェア
      const lineUrl = `https://social-plugins.line.me/lineit/share?url=${currentUrl}`;
      window.open(lineUrl, '_blank', 'width=600,height=400');
    } else if (this.classList.contains('url-copy')) {
      // URLをクリップボードにコピー
      const shareText = window.location.href;
      copyToClipboard(shareText);
      showNotification('コピーしました');
    }
  }
  
  // クリップボードにコピー
  function copyToClipboard(text) {
    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(text);
    } else {
      // フォールバック
      const textarea = document.createElement('textarea');
      textarea.value = text;
      textarea.style.position = 'fixed';
      textarea.style.opacity = '0';
      document.body.appendChild(textarea);
      textarea.select();
      document.execCommand('copy');
      document.body.removeChild(textarea);
    }
  }
  
  // 通知表示
  function showNotification(message) {
    const notification = document.createElement('div');
    notification.style.cssText = `
      position: fixed;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      background: rgba(210, 105, 30, 0.95);
      color: #f5f5f5;
      padding: 1.5rem 2rem;
      border-radius: 8px;
      z-index: 10000;
      box-shadow: 0 10px 40px rgba(0, 0, 0, 0.5);
      font-family: 'Noto Sans JP', sans-serif;
      text-align: center;
      max-width: 90%;
      animation: fadeIn 0.3s ease;
    `;
    notification.textContent = message;
    document.body.appendChild(notification);
    
    setTimeout(() => {
      notification.style.animation = 'fadeOut 0.3s ease';
      setTimeout(() => {
        document.body.removeChild(notification);
      }, 300);
    }, 2500);
  }
  
  // アニメーション用CSS追加
  const style = document.createElement('style');
  style.textContent = `
    @keyframes fadeIn {
      from { opacity: 0; transform: translate(-50%, -60%); }
      to { opacity: 1; transform: translate(-50%, -50%); }
    }
    @keyframes fadeOut {
      from { opacity: 1; transform: translate(-50%, -50%); }
      to { opacity: 0; transform: translate(-50%, -40%); }
    }
  `;
  document.head.appendChild(style);
  
  // DOMContentLoaded後に実行
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initShareButtons);
  } else {
    initShareButtons();
  }
})();
