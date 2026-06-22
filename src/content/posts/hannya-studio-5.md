---
title: 'Hannya Studio #5'
pubDatetime: 2026-06-22T17:58:00.000Z
author: only26k
description: Hannya Studio 指令管理
tags:
  - HannyaStudio
  - twitch
featured: false
draft: false
---
### 內建指令

目前只有兩個，未來還會新增，這兩個指令是我自己最常用的所以先做了，為了修改實況標題跟分類，當指令後面沒有接文字的時候是查詢，如果有接文字則是修改，查詢預設是所有人都可以使用，查詢的權限可以改動，但修改標題或是分類的指令是mod或是實況主本人才可以執行，修改的權限是寫死的不能改動。

例如:

```
!title <-----會顯示目前的標題
!title 新的標題 <---------會把標題改成"新的標題"
```

修改分類有支援模糊搜尋，會抓分類的第一個字母，不需要打完分類完整字，例如最常用的分類是just chatting，只需要打:

```
!game jc
```

如果不想要模糊搜尋的話，分類可以加上雙引號，但不一定會成功，要看有沒有該分類存在。

![](/images/posts/hannya-studio-5/20260622-185536-8d5f.png)

### 自訂指令

可以自訂指令，機器人會自動回話，有支援twitch內建的 `/announce` 一系列指令，可以讓發話功能變成公告的形式，需要寫在回覆內容最前面 (未來會考慮在介面上用選擇的，這樣比較方便使用)。

![](/images/posts/hannya-studio-5/20260622-190850-7xu2.png)

指令權限設定是為了讓該指令只有特定權限的使用者才能使用，權限由高到低排序是實況主>主要mod>mod>訂閱者=VIP，訂閱跟VIP沒有誰比較高，例如VIP沒有訂閱的話，VIP就不能使用訂閱者能使用的指令。

![](/images/posts/hannya-studio-5/20260622-191210-qp9u.png)

指令縮寫設定是指用另外一種指令輸入但會得到一樣的回覆內容

![](/images/posts/hannya-studio-5/20260622-191119-4vkx.png)
