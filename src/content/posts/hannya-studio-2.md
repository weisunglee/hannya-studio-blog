---
title: "Hannya Studio #2"
pubDatetime: 2026-06-21T16:43:00.000Z
author: only26k
description: 用 Twitch 登入、安裝 App，以及網站安全檢查能看出什麼
tags:
  - HannyaStudio
  - twitch
featured: false
draft: false
---

### 登入

用 Twitch 帳號登入即可，不必另外建立一組 Hannya Studio 密碼，也不會把 Twitch 密碼交給這個後台。

![](/images/posts/hannya-studio-2/20260621-170306-kpj2.png)

### 安裝 App

後台可以安裝到手機或電腦，方便開啟和接收推播。iOS 要用 Safari 開啟，再按照頁面指示加入主畫面；Android 則依瀏覽器提供的安裝選項操作。

安裝後還要登入，並開啟這台裝置的贊助通知。手機和電腦要各自設定一次。

![](/images/posts/hannya-studio-2/20260621-170316-9id8.png)

### 安全性

當時我用了幾個免費工具檢查網站：

- [https://securityheaders.com/](https://securityheaders.com/ "https://securityheaders.com/")

  ![](/images/posts/hannya-studio-2/20260621-170649-2m99.png)

- [https://developer.mozilla.org/en-US/observatory](https://developer.mozilla.org/en-US/observatory "https://developer.mozilla.org/en-US/observatory")

  ![](/images/posts/hannya-studio-2/20260621-170705-u5jh.png)

- [https://www.ssllabs.com/ssltest/](https://www.ssllabs.com/ssltest/ "https://www.ssllabs.com/ssltest/")

  ![](/images/posts/hannya-studio-2/20260621-170823-v0qx.png)

有興趣也可以拿來檢查平常使用的網站。這些工具能檢查 HTTP 安全標頭、TLS 等項目，截圖記錄的是當時的結果；分數高也不能保證帳戶一定安全。

**2026-09-09 更新：**原文把後台資料一概寫成「都有加密」，這句不準確。登入 session 使用簽章驗證；授權 token 等敏感資料另有加密機制，是否加密取決於伺服器設定。帳號刪除也有範圍，會移除實況主功能與相關設定，但平台帳戶及已付款贊助事實有保留規則，不能視為所有資料都會消失。
