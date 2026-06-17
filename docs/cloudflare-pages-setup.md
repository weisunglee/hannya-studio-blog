# Cloudflare Pages 部署設定

把這個 repo 接到 Cloudflare Pages,之後每次 `git push` 就會自動建置並上線到
`https://blog.only26k.com`。

## 前置條件

- GitHub repo 已建立:`weisunglee/hannya-studio-blog`
- `only26k.com` 這個網域已經在你的 Cloudflare 帳號裡(DNS 由 Cloudflare 託管)
  - 確認方式:Cloudflare Dashboard 首頁應該看得到 `only26k.com` 這個 zone。
  - 如果沒有,先「Add a site」把 `only26k.com` 加進來並把 nameserver 改成
    Cloudflare 指定的兩組,等狀態變成 Active。

## 步驟一:建立 Pages 專案並接上 GitHub

1. 進入 Cloudflare Dashboard → 左側 **Workers & Pages** → **Create** → 選 **Pages**
   分頁 → **Connect to Git**。
2. 授權 Cloudflare 存取你的 GitHub(`weisunglee` 帳號),選擇
   `hannya-studio-blog` repo → **Begin setup**。
3. 建置設定填入:

   | 欄位 | 值 |
   |------|-----|
   | Production branch | `main` |
   | Framework preset | `Astro` |
   | Build command | `npm run build` |
   | Build output directory | `dist` |

   > Node 版本:Pages 預設可能偏舊,本專案需要 Node 22.12+。到專案
   > **Settings → Variables and Secrets** 新增環境變數
   > `NODE_VERSION = 22`(Production 與 Preview 都加)。

4. 按 **Save and Deploy**。第一次建置約 1–3 分鐘,完成後會給你一個
   `xxx.pages.dev` 網址,先用它確認網站正常。

## 步驟二:綁定自訂網域 blog.only26k.com

1. 進入剛建立的 Pages 專案 → **Custom domains** 分頁 → **Set up a custom
   domain**。
2. 輸入 `blog.only26k.com` → **Continue**。
3. 因為 `only26k.com` 已由 Cloudflare 託管,它會**自動建立一筆 CNAME**
   (`blog` → `xxx.pages.dev`,proxied)→ 按 **Activate domain**。
4. 等幾分鐘,SSL 憑證會自動簽發。完成後 `https://blog.only26k.com` 即可開啟。

   > 不需要、也不要手動再去 DNS 頁面建紀錄,Pages 會自己處理。

## 之後的日常

1. 本機寫文章 → `git push`(推到 `main`)。
2. Cloudflare Pages 自動觸發建置 → 部署。
3. 數十秒後 `https://blog.only26k.com` 更新。

> 推到非 `main` 的分支會產生 Preview 部署(獨立預覽網址),適合先看效果再合併。

## 疑難排解

- **建置失敗 / Node 版本錯誤**:確認 `NODE_VERSION = 22` 環境變數有設。
- **網域一直 pending**:確認 `only26k.com` zone 狀態是 Active、nameserver 已生效。
- **改了設定沒生效**:在 Pages 專案 **Deployments** 手動 **Retry deployment**。
