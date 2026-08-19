# cheesege.github.io

個人網站ʕ•̀ω•́ʔ✧ — <https://www.cheesege.com>

用 [Astro](https://astro.build) 重寫的靜態個人介紹網站，深色 / 淺色主題、捲動進場動畫、響應式版面。

## 開發

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # 產出到 dist/
npm run preview  # 預覽 build 結果
npm run check    # 型別檢查
```

## 改內容

所有文字都集中在 **`src/data/profile.ts`**，不用碰版面就能改：

| 匯出 | 對應區塊 |
| --- | --- |
| `profile` | 首頁大標、別名、標籤 |
| `education` | 學歷 |
| `experience` | 經歷 |
| `contests` | 比賽/檢定 |
| `performances` | 表演 |
| `contacts` | 聯絡方式 |
| `friendSites` | 友站 |
| `nav` | 導覽列項目 |

`contacts` 裡 `href` 還是 `'#'` 的項目（Discord、Instagram）會顯示成不可點的樣式，
`friendSites` 目前是四張佔位卡片，填上真實資料後 `placeholder` 記得拿掉。

`experience` / `contests` 的項目加上 `highlight: true` 會在時間軸上標成亮色重點。

## 部署

推上 `main` 後由 [`.github/workflows/deploy.yml`](.github/workflows/deploy.yml)
自動 build 並發布到 GitHub Pages。

> 第一次使用需要到 repo 的 **Settings → Pages → Build and deployment → Source**
> 改成 **GitHub Actions**（原本是 Deploy from a branch）。

自訂網域設定放在 `public/CNAME`，build 時會被複製到 `dist/`。

## 舊版

改版前的純 HTML/CSS 版本留在 [`legacy/`](legacy/)，
另外也有 git 分支 `legacy-site` 與標籤 `legacy-v1`。
