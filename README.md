# 2026 宮古島旅遊指南 (Miyakojima Travel Guide 2026)

本專案是一個基於 **React + TypeScript + Vite** 開發的互動式旅遊指南 Web 應用程式。專為 2026 年 7 月的「宮古島 6 天 5 夜海陸整合與素食完美執行行程」量身打造。

## 🌟 核心功能與設計特色
- **6 天 5 夜互動式行程時間線**：以極具視覺質感的動態 UI 展示每日的時間流動與景點。
- **素食防踩雷 (Vegetarian Guide)**：整合每日嚴選的素食友善餐廳（如 Gelato Cafe Ninufa、Minaaiya、Doug's Veggie Burger、Cafe 373 & Spices）與超市採買自炊策略。
- **教育與教學連結 (Educational Insights)**：蔡老師專屬的生態與地理教學連結（例如 Ingya Marine Garden 晝夜生態對照）。
- **MapCode 快速檢索**：一鍵查閱並複製全島 20+ 個關鍵景點與餐廳的 MapCode，方便自駕導航。
- **離線防丟狀態持久化**：使用 LocalStorage 記住用戶目前瀏覽的日數、標記已完成行程，甚至可儲存自訂備忘錄。

## 🛠️ 技術底座
- **前端框架**：React 18 + TypeScript + Vite
- **圖示庫**：Lucide React
- **美學風格**：現代深色模式 (Sleek Dark Mode)、毛玻璃質感 (Glassmorphism)、漸變色彩、微互動動畫

## 📂 檔案目錄結構
- `src/`
  - `components/`：UI 元件（如 Dashboard、Timeline、MapCodeList、VegetarianTips、EducationGuide）
  - `data/`：宮古島 6 天 5 夜的結構化行程與 MapCode 資料
  - `App.tsx`：主程式邏輯與路由狀態管理
  - `index.css`：全域設計系統與 CSS Token

---
*本專案由 Antigravity 助理與蔡老師協同設計，祝您宮古島海陸大開眼界、素食吃得安心愉快！*
