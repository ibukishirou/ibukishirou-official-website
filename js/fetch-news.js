// ニュース読み込みJS
async function loadNews() {
  try {
    const response = await fetch('data/news.json');
    const newsData = await response.json();
    
    // 日付フィルタリング
    const today = new Date();
    const validNews = newsData.filter(item => {
      const startDate = new Date(item.startDate);
      const endDate = new Date(item.endDate);
      return today >= startDate && today <= endDate;
    });
    
    // 日付順にソート（新しい順）
    validNews.sort((a, b) => new Date(b.startDate) - new Date(a.startDate));
    
    // 表示
    displayNews(validNews);
  } catch (error) {
    console.error('ニュースの読み込みに失敗しました:', error);
  }
}

function displayNews(newsArray, limit = null) {
  const container = document.getElementById('news-container');
  if (!container) return;
  
  const newsToShow = limit ? newsArray.slice(0, limit) : newsArray;
  
  if (newsToShow.length === 0) {
    container.innerHTML = '<p style="text-align: center; color: var(--color-text-secondary);">現在お知らせはありません</p>';
    return;
  }
  
  container.innerHTML = newsToShow.map(item => `
    <div class="news-item">
      <div class="news-date">${formatDate(item.startDate)}</div>
      <h3 class="news-title">${item.title}</h3>
      <p class="news-body">${item.body}</p>
      ${item.link ? `<a href="${item.link}" target="_blank" class="btn btn-secondary" style="margin-top: 1rem;">詳細を見る</a>` : ''}
    </div>
  `).join('');
}

function formatDate(dateString) {
  const date = new Date(dateString);
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const day = String(date.getDate()).padStart(2, '0');
  return `${year}.${month}.${day}`;
}

// ページ読み込み時に実行
if (document.getElementById('news-container')) {
  loadNews();
}
