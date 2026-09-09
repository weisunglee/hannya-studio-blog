---
title: "Hannya Studio #23"
pubDatetime: 2026-07-09T01:20:00.000Z
author: only26k
description: 用事件授予限時或永久 Twitch VIP，管理到期日期與同步清單
tags:
  - HannyaStudio
  - twitch
featured: false
draft: false
---

![](/images/posts/hannya-studio-23/20260710-084542-gc9p.png)

抖內達標給幾天 VIP，或讓觀眾用忠誠點數兌換 VIP，都可以交給 VIP 自動管理。它會實際修改 Twitch 上的 VIP 身分，限時 VIP 到期後也能清理。

### 先決定給誰、給多久

觸發來源包含抖內、禮物訂閱、頻道點數兌換和聊天室指令。每條規則可以設定限時或永久，限時以天數設定。

授予對象依事件而定，可以是觸發事件的使用者、指令第一個參數，或抖內頁填寫的 Twitch ID。用管理員指令幫別人加 VIP 時，要一起確認參數對象與使用權限，通常只開放 mod 或實況主操作。

### 管理現有 VIP

後台可以搜尋 VIP、調整期限或手動移除。有到期項目尚未清理時，可以按一次清理已到期 VIP；也能從 Twitch 同步最新清單，核對平台上的實際狀態。

正式用在活動前，先以少量規則確認授予對象、期限和到期處理。這些操作會影響 Twitch 官方 VIP 身分，如果只需要聊天室裡的自訂稱號，就不適合用這個模組。
