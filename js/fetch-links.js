// SNSリンク読み込みJS
async function loadSNSLinks() {
  try {
    const response = await fetch('data/links.json');
    const linksData = await response.json();
    
    displaySNSLinks(linksData);
  } catch (error) {
    console.error('SNSリンクの読み込みに失敗しました:', error);
  }
}

function displaySNSLinks(links) {
  const container = document.getElementById('sns-links-container');
  if (!container) return;
  
  const snsConfig = [
    { key: 'youtube', name: 'YouTube', icon: '▶' },
    { key: 'x_main', name: 'X (Main)', icon: '𝕏' },
    { key: 'x_sub', name: 'X (Sub)', icon: '𝕏' },
    { key: 'tiktok', name: 'TikTok', icon: '♪' },
    { key: 'marshmallow', name: 'マシュマロ', icon: '📧' },
    { key: 'booth', name: 'BOOTH', icon: '🛒' },
    { key: 'wishlist', name: 'Wishlist', icon: '🎁' }
  ];
  
  container.innerHTML = snsConfig.map(sns => {
    if (links[sns.key]) {
      return `
        <a href="${links[sns.key]}" target="_blank" rel="noopener noreferrer" class="sns-link">
          <div class="sns-icon">${sns.icon}</div>
          <div class="sns-name">${sns.name}</div>
        </a>
      `;
    }
    return '';
  }).join('');
}

// ページ読み込み時に実行
if (document.getElementById('sns-links-container')) {
  loadSNSLinks();
}
