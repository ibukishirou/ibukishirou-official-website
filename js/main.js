// ============================================
// VTuber 伊吹しろう 公式サイト - メインJS
// ============================================

// ハンバーガーメニュー
document.addEventListener('DOMContentLoaded', () => {
  const hamburger = document.querySelector('.hamburger');
  const navLinks = document.querySelector('.nav-links');
  
  if (hamburger) {
    hamburger.addEventListener('click', () => {
      hamburger.classList.toggle('active');
      navLinks.classList.toggle('active');
    });
    
    // メニューリンククリック時にメニューを閉じる
    const links = document.querySelectorAll('.nav-links a');
    links.forEach(link => {
      link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navLinks.classList.remove('active');
      });
    });
  }
});

// スムーススクロール
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    const href = this.getAttribute('href');
    if (href !== '#' && href !== '') {
      e.preventDefault();
      const target = document.querySelector(href);
      if (target) {
        const headerOffset = 80;
        const elementPosition = target.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
        
        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      }
    }
  });
});

// スクロールアニメーション
const observerOptions = {
  threshold: 0.1,
  rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = '1';
      entry.target.style.transform = 'translateY(0)';
    }
  });
}, observerOptions);

// アニメーション対象要素にスタイルを適用
document.addEventListener('DOMContentLoaded', () => {
  const animateElements = document.querySelectorAll('.card, .news-item, .faq-item, .profile-container');
  animateElements.forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(30px)';
    el.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
    observer.observe(el);
  });
});

// YouTube埋め込み用サムネイル取得
function getYouTubeThumbnail(url) {
  const videoId = extractYouTubeVideoId(url);
  return videoId ? `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg` : '';
}

function extractYouTubeVideoId(url) {
  const regExp = /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#&?]*).*/;
  const match = url.match(regExp);
  return (match && match[7].length === 11) ? match[7] : null;
}

// YouTube埋め込みリンク生成
function getYouTubeEmbedUrl(url) {
  const videoId = extractYouTubeVideoId(url);
  return videoId ? `https://www.youtube.com/embed/${videoId}` : '';
}

// スクロールインジケーター制御
document.addEventListener('DOMContentLoaded', () => {
  const scrollIndicator = document.querySelector('.scroll-indicator');
  
  if (scrollIndicator) {
    // 初期表示後にvisibleクラスを追加（ローディング後）
    setTimeout(() => {
      if (window.scrollY === 0) {
        scrollIndicator.classList.add('visible');
      }
    }, 3000);
    
    window.addEventListener('scroll', () => {
      if (window.scrollY === 0) {
        // 最上部にいるときは表示
        scrollIndicator.classList.remove('hidden');
        scrollIndicator.classList.add('visible');
      } else {
        // スクロールしたら非表示
        scrollIndicator.classList.remove('visible');
        scrollIndicator.classList.add('hidden');
      }
    });
  }
});
