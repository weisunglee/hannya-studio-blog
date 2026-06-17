# only26k's blog

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
   pubDatetime: 2026-06-17T01:00:00Z
   title: 文章標題
   featured: false
   draft: false
   tags:
     - 筆記
   description: "摘要,用於 SEO 與社群分享。"
   ---
   ```

   > 檔名就是網址:`my-post.md` → `/posts/my-post/`。

3. 用 Markdown 寫內容。
4. `git push` 後,Cloudflare Pages 會自動建置並上線。

小技巧:`draft: true` 為草稿(不公開);`featured: true` 會出現在首頁精選區。

## 用 Keystatic 後台寫文章(推薦)

不想手寫 frontmatter 的話,專案內建 [Keystatic](https://keystatic.com/) 視覺化後台(本機 local 模式):

```bash
npm run dev        # 啟動後
# 瀏覽器打開 http://localhost:4321/keystatic
```

在後台填表單寫文章,儲存時會直接寫成 `src/content/posts/*.md`,接著 `git push` 即可上線。

- 後台**只在本機開發時啟用**;正式部署(Cloudflare)維持純靜態,不受影響。
- 設定檔在 `keystatic.config.ts`。

### 在另一台裝置寫文章

Keystatic 是 local 模式,所以在哪台電腦寫,就要先在那台把環境準備好(這台需要裝
[Node.js 22.12+](https://nodejs.org/) 與 git):

```bash
# 1. 把 repo 抓下來
git clone https://github.com/weisunglee/hannya-studio-blog.git
cd hannya-studio-blog

# 2. 裝相依套件
npm install

# 3. 啟動後台
npm run dev
# 瀏覽器開 http://localhost:4321/keystatic 寫文章

# 4. 寫完存檔後,把變更推上去 → Cloudflare 自動部署
git add -A
git commit -m "新文章:標題"
git push
```

> 下次在同一台電腦再寫時,只要 `git pull`(同步最新)→ `npm run dev` 即可,不必重新 clone。

> Keystatic local 模式是「在你自己的電腦上編輯本機檔案」,不是雲端後台 —— 所以一定要先有
> repo 與環境。若之後想「打開瀏覽器就能線上編輯、不必 clone」,需要改用 Keystatic 的
> GitHub 模式(要加 Cloudflare SSR adapter + 設定 GitHub App 授權)。

## 設定

- 站台資訊(標題、作者、網域、社群連結)在 `astro-paper.config.ts`。
- 介面繁中翻譯在 `src/i18n/lang/zh-TW.ts`。
- 「關於」頁面在 `src/content/pages/about.md`。

## 部署

部署設定詳見 [`docs/cloudflare-pages-setup.md`](docs/cloudflare-pages-setup.md)。

## 致謝

主題基於 [AstroPaper](https://github.com/satnaing/astro-paper)(作者 Sat Naing,MIT 授權)。
