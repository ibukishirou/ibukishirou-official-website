# 伊吹しろう Official Website

VTuber「伊吹しろう」の公式サイトです。

## 🎯 プロジェクト概要

本サイトは、VTuber「伊吹しろう」の公式情報を発信する名刺サイトとして構築されています。
初見訪問者が3秒以内に人物像・世界観を理解でき、既存ファンが迷わず情報にアクセスできることを目指しています。

**キャッチコピー：** 気づけば君の毎日に、俺がいる。

## 📁 プロジェクト構造

```
/
├── index.html              # トップページ（ヒーロー・代表作・最新ニュース・SNSリンク）
├── profile.html            # プロフィールページ
├── works.html             # 作品一覧ページ（タブ切替機能）
├── goods.html             # グッズ・ショップページ
├── news.html              # ニュース一覧ページ
├── guidelines.html        # ファンガイドライン
├── faq.html               # よくある質問（アコーディオン形式）
├── contact.html           # お問い合わせページ
├── terms.html             # 利用規約
├── privacy.html           # プライバシーポリシー
│
├── /css
│   └── style.css          # メインスタイルシート（レスポンシブ対応）
│
├── /js
│   ├── main.js            # メイン処理（ハンバーガーメニュー・スクロール）
│   ├── fetch-news.js      # ニュース読み込み
│   ├── fetch-works.js     # 作品読み込み
│   ├── fetch-goods.js     # グッズ読み込み
│   ├── fetch-links.js     # SNSリンク読み込み
│   └── faq.js             # FAQアコーディオン
│
├── /data
│   ├── news.json          # ニュースデータ（startDate/endDate制御）
│   ├── works.json         # 作品データ（カテゴリー別）
│   ├── goods.json         # グッズデータ
│   └── links.json         # SNSリンクデータ
│
└── /assets
    └── /img
        ├── header.jpg         # ヒーローセクション背景
        ├── profile_full.png   # プロフィール全身立ち絵
        ├── logo_wolf.png      # ロゴ（狼）
        └── logo_text.png      # ロゴ（テキスト）
```

## ✅ 完成済み機能

### 全10ページ構成
1. **Home** - フルスクリーンヒーロー、代表作3本、最新ニュース、SNSリンク
2. **Profile** - 基本情報、全身立ち絵
3. **Works** - タブ切替式作品一覧（歌/コラボ/企画/その他）
4. **Goods** - 販売中グッズ一覧
5. **News** - お知らせ一覧（日付フィルタリング機能）
6. **Fan Guidelines** - ファン活動ガイドライン（全文掲載）
7. **FAQ** - よくある質問（アコーディオン形式）
8. **Contact** - お問い合わせ（Google Form連携準備完了）
9. **利用規約** - サイト利用規約
10. **プライバシーポリシー** - 個人情報保護方針

### デザイン・技術仕様
- ✅ **配色**：深い赤（#8B0000）、紅葉オレンジ（#D2691E）、黒、白
- ✅ **フォント**：Noto Serif JP（和風明朝体）+ Noto Sans JP
- ✅ **レスポンシブデザイン**：PC/タブレット/スマホ対応
- ✅ **アニメーション**：控えめなフェードイン・パララックス効果
- ✅ **JSON駆動**：コンテンツ更新はJSONファイル編集のみ
- ✅ **ハンバーガーメニュー**：モバイル対応ナビゲーション
- ✅ **スムーススクロール**：ページ内遷移

## 🔧 運用方法

### 1. ニュース更新
`data/news.json`を編集してニュースを追加・編集できます。

```json
{
  "id": "2025-004",
  "title": "新しいお知らせ",
  "body": "お知らせの内容をここに記載します。",
  "link": "https://example.com",
  "startDate": "2025-01-20",
  "endDate": "2025-12-31"
}
```

- **startDate/endDate**：表示期間を制御（現在日時がこの範囲内のニュースのみ表示）
- **link**：詳細ページがある場合は設定（任意）

### 2. 作品更新
`data/works.json`を編集して作品を追加できます。

```json
{
  "id": "work-004",
  "title": "【歌ってみた】新曲タイトル",
  "category": "song",
  "thumbnail": "/assets/works/thumb004.jpg",
  "link": "https://www.youtube.com/watch?v=XXXXXX",
  "tags": ["歌", "ソロ"]
}
```

- **category**：`song`（歌）、`collab`（コラボ）、`project`（企画）、`other`（その他）
- **thumbnail**：サムネイル画像（YouTubeの場合は自動取得）

### 3. グッズ更新
`data/goods.json`を編集してグッズ情報を追加できます。

```json
{
  "id": "goods-003",
  "name": "新グッズ名",
  "thumbnail": "/assets/goods/new_goods.jpg",
  "link": "https://ibukishirou.booth.pm/items/XXXXXX"
}
```

### 4. SNSリンク更新
`data/links.json`を編集してSNSリンクを更新できます。

```json
{
  "youtube": "https://www.youtube.com/@ibukishirou",
  "tiktok": "https://www.tiktok.com/@ibukishirou",
  "x_main": "https://x.com/ibukishirou",
  "x_sub": "https://x.com/ibukishirou2nd",
  "booth": "https://ibukishirou.booth.pm/",
  "wishlist": "https://www.amazon.co.jp/hz/wishlist/ls/XXXXXX"
}
```

### 5. Google Formの設定
`contact.html`ファイルを開き、以下の箇所を編集してください：

```html
<!-- 変更前 -->
<a href="#" class="btn" style="pointer-events: none; opacity: 0.6;">

<!-- 変更後 -->
<a href="【Google FormのURL】" class="btn" target="_blank">
```

また、`style="pointer-events: none; opacity: 0.6;"`の部分を削除してください。

## ⚠️ 重要：初期セットアップ

### ヘッダー背景画像の設定
現在、ヘッダー背景画像（`assets/img/header.jpg`）が空のファイルになっています。
以下のいずれかの方法で適切な画像を設定してください：

1. **元の背景画像を使用する場合**
   - 提供された背景画像を`assets/img/header.jpg`として保存してください
   - 推奨サイズ：1920x1080px以上のワイド画像

2. **プロフィール画像を使用する場合（暫定）**
   - `assets/img/profile_full.jpg`をコピーして`header.jpg`にリネームしてください

## 🚀 GitHub Pages デプロイ手順

1. GitHubリポジトリを作成
2. プロジェクトファイルをプッシュ
3. リポジトリ設定 → Pages → Source で `main`ブランチを選択
4. 公開URLが発行されます（`https://username.github.io/repository-name/`）

### 独自ドメイン設定（オプション）

1. ドメインを取得
2. DNSレコードを設定（GitHubのIPアドレスを指定）
3. リポジトリ設定 → Pages → Custom domain でドメインを設定
4. プロジェクトルートに`CNAME`ファイルを作成し、ドメイン名を記載

## 📋 今後の拡張機能（未実装）

### Cloudflare Workers連携
- YouTube最新動画の自動取得
- TikTok最新動画の自動取得
- API情報の非公開化

実装時は`/cloudflare_workers`ディレクトリにWorkerスクリプトを配置し、
各JSファイルからWorkerエンドポイントを呼び出すように変更してください。

## 🎨 デザインコンセプト

- **ホロライブ寄りの洗練された余白設計**
- **情報特化・演出過多禁止**
- **和風ニュアンスを含む明朝系フォント**
- **深い赤・紅葉オレンジの配色で世界観を表現**

## 📝 メタ情報

### SEO設定済み項目
- meta description
- meta keywords
- OGPタグ（Facebook/Twitter対応）
- 構造化マークアップ準備

### OGP画像
現在は`assets/img/header.jpg`を使用。
専用のOGP画像（1200x630px推奨）を作成して設定することを推奨します。

## 🛠 メンテナンス

### 画像の追加
- 作品サムネイル：`/assets/works/`
- グッズ画像：`/assets/goods/`
- その他画像：`/assets/img/`

### スタイル変更
`css/style.css`の`:root`セクションでカラー変数を変更できます。

```css
:root {
  --color-primary: #8B0000;      /* メインカラー */
  --color-secondary: #D2691E;    /* アクセントカラー */
  --color-dark: #1a1a1a;         /* 背景色 */
}
```

## 📞 サポート

質問や問題がある場合は、GitHubのIssuesセクションで報告してください。

---

**制作日**: 2025年1月17日  
**バージョン**: 1.0.0  
**制作者**: VTuber 伊吹しろう 公式サイト制作チーム

© 2025 伊吹しろう Official Website. All Rights Reserved.
