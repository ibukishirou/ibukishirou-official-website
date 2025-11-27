# 伊吹しろう Official Website

## プロジェクト概要

VTuber「伊吹しろう」の公式Webサイトです。  
個人事務所ULRIC所属、歌とトークで君を虜にするVTuberとして活動中。

本サイトでは、プロフィール、実績、グッズ、ファンガイドライン、よくある質問などの情報を提供しています。

## プロジェクト構造

```
/
├── index.html              # トップページ
├── profile.html            # プロフィールページ
├── achievements.html       # 実績ページ（年表形式）
├── goods.html             # グッズページ
├── guidelines.html        # ファンガイドライン
├── faq.html               # よくある質問
├── contact.html           # お問い合わせ
├── terms.html             # 利用規約
├── privacy.html           # プライバシーポリシー
│
├── /css                   # スタイルシート
│   ├── style.css          # 共通スタイル
│   ├── loading.css        # ローディングアニメーション
│   ├── achievements.css   # 実績ページ専用スタイル
│   └── profile.css        # プロフィールページ専用スタイル
│
├── /js                    # JavaScript
│   ├── main.js            # メインロジック
│   ├── components.js      # ヘッダー・フッター読込
│   ├── breadcrumb.js      # パンくずリスト生成
│   ├── loading.js         # ローディング制御
│   ├── share.js           # SNSシェア機能
│   ├── faq.js             # FAQ表示制御
│   ├── fetch-achievements.js  # 実績データ読込
│   ├── fetch-goods.js     # グッズデータ読込
│   ├── fetch-guidelines.js    # ガイドライン読込
│   └── fetch-links.js     # ソーシャルリンク読込
│
├── /data                  # JSONデータファイル
│   ├── achievements.json  # 実績情報（年表データ）
│   ├── works.json         # 制作物情報
│   ├── goods.json         # グッズ情報
│   ├── links.json         # ソーシャルリンク
│   ├── faq.json           # よくある質問
│   └── guidelines.json    # ファンガイドライン
│
├── /assets                # 静的リソース
│   ├── /img              # 画像ファイル
│   │   ├── header.webp          # ヘッダー画像
│   │   ├── profile_full.webp    # プロフィール立ち絵
│   │   ├── sanmenzu.webp        # 三面図
│   │   ├── logo_wolf.webp       # ロゴ画像
│   │   ├── placeholder.webp     # プレースホルダー
│   │   └── favicon-*.png        # ファビコン
│   └── /goods            # グッズ画像
│
├── sitemap.xml            # サイトマップ
├── robots.txt             # クローラー制御
├── CNAME                  # カスタムドメイン設定
└── README.md              # このファイル
```

### 技術仕様

- **フロントエンド**: Vanilla JavaScript（フレームワーク不使用）
- **データ管理**: JSON形式でのコンテンツ管理
- **スタイリング**: CSS変数を活用したカスタムデザイン
- **レスポンシブ対応**: モバイル・タブレット・デスクトップ対応
- **SEO対策**: メタタグ、OGP、構造化データ、サイトマップ完備
- **ホスティング**: GitHub Pages（独自ドメイン: ibukishirou.com）

---

© 2025 伊吹しろう Official Website. All Rights Reserved.
