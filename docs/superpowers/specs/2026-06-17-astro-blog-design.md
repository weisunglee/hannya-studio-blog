# Hannya Studio Blog — 設計文件

- 日期: 2026-06-17
- 作者: only26k (GitHub: weisunglee)

## 目標

用 Astro 建立一個繁體中文部落格,原始碼放在 GitHub,透過 Cloudflare Pages
自動部署,並綁定自訂網域 `https://blog.only26k.com`。

## 決策摘要

| 項目 | 選擇 |
|------|------|
| 框架 | Astro |
| 主題 | AstroPaper(現成主題,繁中化) |
| 內容語言 | 繁體中文 (zh-TW) |
| 部署平台 | Cloudflare Pages |
| GitHub repo | `weisunglee/hannya-studio-blog`(public) |
| 自訂網域 | `blog.only26k.com`(subdomain,CNAME) |
| 站台標題 | Hannya Studio |
| 作者 | only26k |

## 架構

```
本機開發  ──push──▶  GitHub repo  ──webhook──▶  Cloudflare Pages
(npm run dev)        weisunglee/...           自動 build + deploy
                                                      │
                                              blog.only26k.com
                                              (CNAME → *.pages.dev)
```

- **內容層**: 文章為 Markdown/MDX,放在 `src/content/blog/`,以 frontmatter
  (title / pubDatetime / tags / description) 描述 metadata。
- **主題層**: AstroPaper 提供首頁、文章頁、標籤頁、關於頁、搜尋、深淺色切換、
  RSS、sitemap、SEO/OG 標籤。
- **設定層**: `src/config.ts`(站台資訊)、`astro.config.ts`(`site` 設網域)、
  語系設為 `zh-TW`。

## 元件 / 設定點

1. `astro.config.ts` — `site: "https://blog.only26k.com"`、integrations。
2. `src/config.ts` — SITE 物件:title=Hannya Studio、author=only26k、website、
   desc、ogImage、locale=zh-TW。
3. `src/content/blog/` — 範例文章一篇(繁中)。
4. 介面字串繁中化(AstroPaper 的 i18n / 文案)。
5. `README.md` — 專案說明 + 部署/寫文章流程。
6. `public/` — favicon / OG image(沿用主題預設,之後可換)。

## 部署流程(完成後的日常)

1. 在 `src/content/blog/` 新增 `.md` → 寫文章 → `git push`。
2. Cloudflare Pages 偵測到 push → 自動 `npm run build` → 部署。
3. 數十秒後在 `blog.only26k.com` 上線。

## 網域綁定(一次性)

- 前提: `only26k.com` 已是 Cloudflare 託管的 zone。
- 步驟: Pages 專案 → Custom domains → 加入 `blog.only26k.com` →
  Cloudflare 自動建立 CNAME(proxied)→ 自動簽 SSL。
- 不需手動預建 DNS 紀錄。

## 驗證

- 本機 `npm run dev`:首頁、文章頁、標籤、深淺色切換正常顯示繁中。
- 本機 `npm run build`:靜態產出成功(部署前先確認)。
- push 後 Cloudflare Pages build 綠燈。
- 綁定網域後 `https://blog.only26k.com` 可開、HTTPS 正常。

## 範圍外(YAGNI,之後再說)

- 留言系統、訪客分析、電子報訂閱。
- i18n 雙語(目前只做繁中)。
- 自訂視覺設計(先用主題預設)。

## 待辦前提(需使用者操作)

- 確認 `only26k.com` 已在 Cloudflare 帳號內。
- Cloudflare Pages 綁 repo 與自訂網域為後台手動步驟,將提供逐步指南。
