<script setup>
</script>

<template>
  <header class="masthead position-relative">
      <!-- 額外的暗化遮罩讓文字更清楚 -->
      <div class="overlay"></div> 
      <div class="container px-4 px-lg-5 h-100 position-relative z-1">
          <div class="h-100 row gx-4 gx-lg-5 align-items-center justify-content-center text-center">
              
              <div class="col-lg-10 align-self-end mt-5">
                  <div class="glass-badge mb-4">
                      <span class="badge-icon">✨</span>
                      <div>
                          <b>服務對象：</b>高雄市具鑑輔文號之特教生 
                          <span class="badge-desc">(申請鑑輔文號請洽各校輔導室)</span>
                      </div>
                  </div>
                  <h1 class="hero-title">愛心園</h1>
                  <p class="hero-subtitle mt-3">用愛心來圓他們的夢想</p>
                  <hr class="divider" />
              </div>

              <div class="col-lg-8 align-self-baseline">
                  <a class="btn-custom" href="#flowchart">
                      了解更多 <i class="bi bi-arrow-right-circle-fill ms-2"></i>
                  </a>
              </div>

          </div>
      </div>
  </header>
</template>

<style scoped>
/* 背景覆蓋層：提升文字閱讀體驗 */
.overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(135deg, rgba(0,0,0,0.2) 0%, rgba(0,0,0,0.6) 100%);
    z-index: 0;
}

/* 毛玻璃半透明提示框 (取代突兀的 Alert) */
.glass-badge {
    display: inline-flex;
    align-items: center;
    gap: 12px;
    background: rgba(255, 255, 255, 0.15);
    backdrop-filter: blur(12px);
    -webkit-backdrop-filter: blur(12px);
    border: 1px solid rgba(255, 255, 255, 0.3);
    padding: 12px 28px;
    border-radius: 50px;
    color: #fff;
    font-size: 1.1rem;
    box-shadow: 0 8px 32px 0 rgba(0, 0, 0, 0.2);
    animation: slideDown 1s cubic-bezier(0.16, 1, 0.3, 1) forwards;
    opacity: 0; /* from animation */
}

.badge-icon {
    font-size: 1.4rem;
    animation: bounceIcon 2s infinite ease-in-out;
}

.badge-desc {
    opacity: 0.8;
    font-size: 0.95rem;
    margin-left: 5px;
}

@media (max-width: 768px) {
    .glass-badge {
        flex-direction: column;
        border-radius: 20px;
        text-align: center;
        padding: 15px;
    }
    .badge-desc { margin-left: 0; display: block; margin-top: 5px; }
    .hero-title { font-size: 3.5rem !important; }
}

/* 漸層標題文字 */
.hero-title {
    font-size: 6rem;
    font-weight: 800;
    background: linear-gradient(to right, #ffffff, #fff3e0);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    filter: drop-shadow(0px 4px 6px rgba(0,0,0,0.4));
    margin-bottom: 0;
    opacity: 0;
    animation: zoomIn 1.2s cubic-bezier(0.2, 0.8, 0.2, 1) 0.3s forwards;
}

/* 副標題浮現效果 */
.hero-subtitle {
    font-size: 2rem;
    color: rgba(255, 255, 255, 0.95);
    font-weight: 500;
    text-shadow: 0 2px 10px rgba(0,0,0,0.5);
    letter-spacing: 4px;
    opacity: 0;
    animation: floatUp 1s ease-out 0.6s forwards;
}

/* 動畫分隔線 */
.divider {
    max-width: 0;
    border-width: 0.2rem;
    border-color: #f4623a !important;
    margin: 2rem auto;
    opacity: 0;
    animation: expandWidth 1s ease-out 0.9s forwards;
}

/* 現代化漸層按鈕 */
.btn-custom {
    display: inline-flex;
    align-items: center;
    background: linear-gradient(45deg, #f4623a, #ff7e5f);
    color: white !important;
    padding: 16px 45px;
    font-size: 1.3rem;
    font-weight: 700;
    border-radius: 50px;
    text-decoration: none;
    transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
    box-shadow: 0 10px 20px rgba(244, 98, 58, 0.4);
    opacity: 0;
    animation: floatUp 1s ease-out 1.2s forwards;
}

.btn-custom:hover {
    transform: translateY(-8px) scale(1.05);
    box-shadow: 0 15px 30px rgba(244, 98, 58, 0.6);
}

.btn-custom i {
    transition: transform 0.3s ease;
}

.btn-custom:hover i {
    transform: translateX(8px);
}

/* --- 動畫 Keyframes --- */
@keyframes slideDown {
    from { opacity: 0; transform: translateY(-40px); }
    to { opacity: 1; transform: translateY(0); }
}

@keyframes floatUp {
    from { opacity: 0; transform: translateY(40px); }
    to { opacity: 1; transform: translateY(0); }
}

@keyframes zoomIn {
    from { opacity: 0; transform: scale(0.9); }
    to { opacity: 1; transform: scale(1); }
}

@keyframes expandWidth {
    from { max-width: 0; opacity: 0; }
    to { max-width: 4rem; opacity: 1; }
}

@keyframes bounceIcon {
    0%, 100% { transform: translateY(0); }
    50% { transform: translateY(-5px); }
}
</style>
