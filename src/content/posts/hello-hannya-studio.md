---
author: only26k
pubDatetime: 2026-06-17T01:00:00Z
title: 歡迎來到 Hannya Studio
slug: welcome-to-hannya-studio
featured: true
draft: false
tags:
  - 公告
description: "Hannya Studio 部落格正式啟用,這篇文章說明這裡會寫些什麼,以及如何新增文章。"
---

這是 **Hannya Studio** 的第一篇文章 🎉

這個部落格用 [Astro](https://astro.build/) 搭配 [AstroPaper](https://github.com/satnaing/astro-paper) 主題建置,程式碼放在 GitHub,透過 Cloudflare Pages 自動部署。

## 這裡會寫些什麼

- 技術筆記與心得
- 專案紀錄
- 雜談

## 如何新增一篇文章

1. 在 `src/content/posts/` 底下新增一個 `.md` 檔(例如 `my-post.md`)。
2. 在最上方填寫 frontmatter:

```yaml
---
author: only26k
pubDatetime: 2026-06-17T01:00:00Z
title: 文章標題
slug: my-post
featured: false
draft: false
tags:
  - 筆記
description: "這篇文章的摘要,會用在 SEO 與社群分享。"
---
```

3. 在底下用 Markdown 寫內容。
4. `git push`,Cloudflare Pages 會自動建置並上線。

> 小提醒:把 `draft` 設成 `true` 可以先存草稿不公開;`featured: true` 會讓文章出現在首頁精選區。

開始寫吧!
