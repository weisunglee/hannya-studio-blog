---
title: "Hannya Studio #5"
pubDatetime: 2026-06-22T17:58:00.000Z
author: only26k
description: 用指令修改直播標題與分類，並設定自訂回覆、權限和縮寫
tags:
  - HannyaStudio
  - twitch
featured: false
draft: false
---

### 內建指令

一開始只做了修改標題和分類這兩個指令，因為這是我自己最常用的。指令後面沒接文字就是查詢，有接文字就是修改。

查詢預設所有人都能用，也能調整查詢權限；修改標題或分類則限 mod 或實況主，這個限制不能改。

例如：

```
!title <-----會顯示目前的標題
!title 新的標題 <---------會把標題改成"新的標題"
```

分類支援模糊搜尋，可以用名稱各字的第一個字母。像 Just Chatting，只要打：

```
!game jc
```

不想用模糊搜尋，就把分類名稱加上雙引號。能不能修改成功，仍要看 Twitch 上有沒有對應分類。

![](/images/posts/hannya-studio-5/20260622-185536-8d5f.png)

**2026-09-09 更新：**內建指令已增加為 `!commands`、`!title`、`!game`、`!scene`、`!purge` 五個。上面保留當初先做標題與分類的使用例子。

### 自訂指令

自訂指令可以讓機器人回覆指定文字。早期要發公告時，得把 Twitch 的 `/announce` 一系列指令放在回覆最前面，我當時就想改成選單，設定會方便些。

**2026-09-09 更新：**現在介面已有一般訊息／公告的選項，公告顏色也能直接選，不必手動填前綴。

![](/images/posts/hannya-studio-5/20260622-190850-7xu2.png)

權限用來限制誰能使用指令。實況主、主要 mod、mod 依序有較高權限；訂閱者和 VIP 則分開判斷。VIP 如果沒有訂閱，就不能因為有 VIP 身分而使用限訂閱者的指令。

![](/images/posts/hannya-studio-5/20260622-191210-qp9u.png)

縮寫就是替同一個指令加另一種叫法，輸入任一名稱都會得到相同回覆。

![](/images/posts/hannya-studio-5/20260622-191119-4vkx.png)
