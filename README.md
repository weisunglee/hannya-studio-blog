# Hannya Studio Blog

only26k 的個人部落格,用 [Astro](https://astro.build/) + [AstroPaper](https://github.com/satnaing/astro-paper) 主題建置,透過 Cloudflare Pages 自動部署到 <https://blog.only26k.com>。

## 本機開發

```bash
npm install      # 安裝相依套件
npm run dev      # 啟動本機開發伺服器 (http://localhost:4321)
npm run build    # 建置靜態檔到 dist/
npm run preview  # 預覽 build 結果
```

> 需要 Node.js 22.12 以上。

## 寫一篇新文章

1. 在 `src/content/posts/` 新增一個 `.md` 檔。
2. 填寫 frontmatter:

   ```yaml
   ---
   author: only26k
   pubDatetime: 2026-06-17T09:00:00Z
   title: 文章標題
   slug: my-post
   featured: false
   draft: false
   tags:
     - 筆記
   description: "摘要,用於 SEO 與社群分享。"
   ---
   ```

3. 用 Markdown 寫內容。
4. `git push` 後,Cloudflare Pages 會自動建置並上線。

小技巧:`draft: true` 為草稿(不公開);`featured: true` 會出現在首頁精選區。

## 設定

- 站台資訊(標題、作者、網域、社群連結)在 `astro-paper.config.ts`。
- 介面繁中翻譯在 `src/i18n/lang/zh-TW.ts`。
- 「關於」頁面在 `src/content/pages/about.md`。

## 部署

部署設定詳見 [`docs/cloudflare-pages-setup.md`](docs/cloudflare-pages-setup.md)。

## 致謝

主題基於 [AstroPaper](https://github.com/satnaing/astro-paper)(作者 Sat Naing,MIT 授權)。
