# 凱旋醫院附設愛心園官網 (KSPH Love Garden Website)

> 🏥 高雄市立凱旋醫院附設愛心園官方網站  
> 線上網址：[https://kkian481718.github.io/ksph_lovepark_new/](https://kkian481718.github.io/ksph_lovepark_new/)

---

## 📖 專案介紹 (Overview)
本專案為高雄市立凱旋醫院附設愛心園（針對情緒與行為障礙學生之教育與輔導機構）所設計建置之正式對外服務網站。提供入班流程說明、環境與特色課程介紹，以及即時線上諮詢聯絡資訊。

網站採用現代前端技術重構，具備完整的 RWD 響應式佈局、互動式流程引導以及無障礙親和力考量。

---

## 🛠️ 技術架構 (Tech Stack)
- **Frontend Framework**: Vue 3 (Composition API, `<script setup>`)
- **Build Tool**: Vite
- **Styling**: Bootstrap 5 + 自訂現代玻璃擬態 (Glassmorphism) 與莫蘭迪柔和色系 (Pastel Theme)
- **Deployment & CI/CD**: GitHub Actions 自動建置並部署至 GitHub Pages
- **Icons & Fonts**: Bootstrap Icons, Google Fonts (Zen Maru Gothic & Noto Serif TC)

---

## 🚀 專案結構 (Project Structure)
```
ksph_lovepark_new/
├── .github/workflows/       # GitHub Actions 自動部署工作流 (deploy.yml)
├── ksph_lovepark_vue/       # Vue 3 前端主要專案
│   ├── src/
│   │   ├── components/      # 模組化元件 (Hero, Flowchart, Portfolio, Contact, etc.)
│   │   ├── App.vue          # 主頁面裝配
│   │   └── main.js          # Vue 入口
│   ├── package.json
│   └── vite.config.js
└── index.html               # 專案靜態導覽與備用入口
```

---

## 💻 本地開發與建置 (Local Development)

### 1. 安裝相依套件
```bash
cd ksph_lovepark_vue
npm install
```

### 2. 啟動本機開發伺服器
```bash
npm run dev
```

### 3. 編譯生產環境檔案
```bash
npm run build
```

---

## 📄 授權與維護 (Maintenance)
Designed & Developed by **Miffy Studio & Love Garden Team**.  
All rights reserved © 2002–Present.
