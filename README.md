# EXECUTIVE NEXUS - 経営者コミュニティHP

志高き経営者が集う、次世代のビジネスコミュニティのホームページです。

## 技術スタック

- **Next.js 15** (App Router)
- **TypeScript**
- **Tailwind CSS**
- **Framer Motion**

## セットアップ

```bash
npm install
npm run dev
```

開発サーバーが http://localhost:3000 で起動します。

## ビルド

```bash
npm run build
npm start
```

## 構成

```
src/
  app/
    globals.css    # グローバルスタイル
    layout.tsx     # ルートレイアウト
    page.tsx       # トップページ
  components/
    Header.tsx             # ヘッダー・ナビゲーション
    HeroSection.tsx        # ヒーローセクション
    AnimatedBackground.tsx # パーティクル背景
    MarqueeSection.tsx     # キーワード流し表示
    AboutSection.tsx       # コミュニティ紹介
    NumbersSection.tsx     # 実績数値
    FeaturesSection.tsx    # 特徴セクション
    EventsSection.tsx      # イベント情報
    VoicesSection.tsx      # メンバーの声
    ContactSection.tsx     # お問い合わせ
    ScrollReveal.tsx       # スクロールアニメーション
    Footer.tsx             # フッター
```
