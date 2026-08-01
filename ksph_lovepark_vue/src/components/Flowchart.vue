<script setup>
import { ref } from 'vue';

const viewMode = ref('interactive'); // 'interactive' | 'image'
</script>

<template>
  <section class="page-section bg-gray py-5" id="flowchart">
    <div class="container px-4">
      <h2 class="text-center fw-bold">入班流程圖</h2>
      <hr class="divider divider-dark mb-4" />

      <!-- Toggle Buttons -->
      <div class="d-flex justify-content-center mb-5">
        <div class="btn-group shadow-sm" role="group" aria-label="流程圖模式切換">
          <input type="radio" class="btn-check" name="btnradio" id="btnradio1" autocomplete="off" value="interactive" v-model="viewMode">
          <label class="btn btn-outline-primary px-4 fw-medium" for="btnradio1">
            <i class="bi bi-list-nested me-2"></i>互動式引導
          </label>
        
          <input type="radio" class="btn-check" name="btnradio" id="btnradio2" autocomplete="off" value="image" v-model="viewMode">
          <label class="btn btn-outline-primary px-4 fw-medium" for="btnradio2">
            <i class="bi bi-image me-2"></i>完整原圖
          </label>
        </div>
      </div>

      <!-- Static Image Mode -->
      <div v-if="viewMode === 'image'" class="text-center animate-fade-in fade-in-section">
        <div class="bg-white p-3 rounded-4 shadow-sm d-inline-block">
          <img class="img-fluid rounded" src="/assets/img/process.png" alt="入班流程圖完整原圖">
        </div>
      </div>

      <!-- Interactive Timeline Mode -->
      <div v-else class="timeline-container pb-5 animate-fade-in fade-in-section">
        
        <!-- Stage 1 -->
        <div class="timeline-item">
          <div class="timeline-icon bg-stage1">
            <i class="bi bi-person-bounding-box"></i>
          </div>
          <div class="timeline-content">
            <div class="card shadow-sm border-0 border-top border-stage1 rounded-4">
              <div class="card-body p-4">
                <h5 class="card-title fw-bold text-stage1 mb-3">起源：發現需求</h5>
                <p class="card-text text-muted mb-3">學齡兒童，疑有情緒障礙或精神疾病者。</p>
                <div class="d-flex gap-2 flex-wrap">
                  <span class="badge badge-soft px-3 py-2 border"><i class="bi bi-hospital me-1"></i> 兒童青少年門診</span>
                  <span class="badge badge-soft px-3 py-2 border"><i class="bi bi-truck-front me-1"></i> 急診</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Stage 2 -->
        <div class="timeline-item">
          <div class="timeline-icon bg-stage2">
            <i class="bi bi-clipboard2-pulse"></i>
          </div>
          <div class="timeline-content">
            <div class="card shadow-sm border-0 border-top border-stage2 rounded-4">
              <div class="card-body p-4">
                <h5 class="card-title fw-bold text-stage2 mb-3">評估：醫療專業判斷</h5>
                
                <div class="decision-block mb-4 p-3 tag-bg rounded-3 border">
                  <div class="fw-bold mb-2">Q1: 評估是否需全日住院？</div>
                  <div class="row g-2">
                    <div class="col-md-6">
                      <div class="h-100 p-2 tag-no rounded d-flex align-items-center">
                        <i class="bi bi-x-circle-fill me-2"></i> 否 👉 門診追蹤治療 (返回原校就讀)
                      </div>
                    </div>
                    <div class="col-md-6">
                      <div class="h-100 p-2 tag-yes rounded d-flex align-items-center">
                        <i class="bi bi-check-circle-fill me-2"></i> 是 👉 繼續評估
                      </div>
                    </div>
                  </div>
                </div>

                <div class="decision-block p-3 tag-bg rounded-3 border">
                  <div class="fw-bold mb-2">Q2: 評估病情是否穩定？</div>
                  <div class="row g-2">
                    <div class="col-md-6">
                      <div class="h-100 p-2 tag-warn rounded d-flex align-items-center">
                        <i class="bi bi-exclamation-circle-fill me-2"></i> 否 👉 進行症狀治療
                      </div>
                    </div>
                    <div class="col-md-6">
                      <div class="h-100 p-2 tag-yes rounded d-flex align-items-center">
                        <i class="bi bi-check-circle-fill me-2"></i> 是 👉 可轉介特教資源
                      </div>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>

        <!-- Stage 3 -->
        <div class="timeline-item">
          <div class="timeline-icon bg-stage3">
            <i class="bi bi-envelope-paper"></i>
          </div>
          <div class="timeline-content">
            <div class="card shadow-sm border-0 border-top border-stage3 rounded-4">
              <div class="card-body p-4">
                <h5 class="card-title fw-bold text-stage3 mb-3">準備：轉介與聯繫</h5>
                <h6 class="fw-bold mb-3"><i class="bi bi-check2-square text-stage3 me-2"></i>開立轉介、申請服務</h6>
                
                <div class="row g-3">
                  <div class="col-md-6">
                    <div class="p-3 tag-bg rounded shadow-sm h-100">
                      <div class="fw-bold mb-2 text-dark"><i class="bi bi-journal-text me-2"></i>擬定教學計劃</div>
                      <small class="text-muted d-block border-top pt-2 mt-2">
                        <strong>評估學童：</strong>目前學力基礎、在學狀況、身心狀況
                      </small>
                    </div>
                  </div>
                  <div class="col-md-6">
                    <div class="p-3 tag-bg rounded shadow-sm h-100">
                      <div class="fw-bold mb-2 text-dark"><i class="bi bi-telephone ms-1 me-2"></i>聯絡原就讀學校</div>
                      <small class="text-muted d-block border-top pt-2 mt-2">
                        <strong>對接對象：</strong>班級導師、輔導老師
                      </small>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>

        <!-- Stage 4 -->
        <div class="timeline-item">
          <div class="timeline-icon bg-stage4">
            <i class="bi bi-mortarboard"></i>
          </div>
          <div class="timeline-content">
            <div class="card shadow-sm border-0 border-top border-stage4 rounded-4">
              <div class="card-body p-4 text-center">
                <h5 class="card-title fw-bold text-stage4 mb-2">入班：正式學習</h5>
                <p class="fs-5 fw-medium text-dark mb-0">排定課表、開始上課</p>
              </div>
            </div>
          </div>
        </div>

        <!-- Stage 5 -->
        <div class="timeline-item">
          <div class="timeline-icon bg-stage5">
            <i class="bi bi-arrow-repeat"></i>
          </div>
          <div class="timeline-content">
            <div class="card shadow-sm border-0 border-top border-stage5 rounded-4">
              <div class="card-body p-4">
                <h5 class="card-title fw-bold text-stage5 mb-3">追蹤：後續評估與過渡</h5>
                
                <div class="d-flex align-items-start tag-bg p-3 rounded mb-3 border">
                  <i class="bi bi-people-fill fs-4 text-muted me-3 mt-1"></i>
                  <div>
                    <div class="fw-bold">團隊觀察與個案討論</div>
                    <small class="text-muted d-block mb-2">每月參與個案討論、持續了解學員在院學習狀況。</small>
                    <div class="tag-warn px-2 py-1 mb-0 d-inline-flex align-items-center" style="font-size: 0.85rem; border-radius: 6px;">
                      <i class="bi bi-exclamation-triangle-fill me-2"></i> <strong>原校班級導師、輔導老師須定期共同參與</strong>
                    </div>
                  </div>
                </div>

                <div class="fw-bold mb-3 text-dark text-center border-bottom pb-2">定期評估學員返校適應能力</div>

                <div class="row g-3 align-items-stretch">
                  <div class="col-sm-6">
                    <div class="p-3 h-100 rounded bg-white border border-stage1 text-center">
                      <div class="badge bg-stage1 mb-2">直接返校</div>
                      <div class="fw-bold mb-1">出院返回原校就讀</div>
                      <div class="text-muted small"><i class="bi bi-arrow-down short-arrow"></i></div>
                      <h4 class="text-stage5 mt-2 mb-0 fw-black">結 案</h4>
                    </div>
                  </div>
                  <div class="col-sm-6">
                    <div class="p-3 h-100 rounded bg-white border border-stage2 text-center position-relative">
                      <div class="badge bg-stage2 mb-2">漸進式返校</div>
                      <div class="fw-bold mb-1">轉「日間留院」</div>
                      <div class="text-muted small"><i class="bi bi-arrow-down short-arrow"></i></div>
                      <div class="fw-bold mb-1">出院返回原校就讀</div>
                      <div class="text-muted small"><i class="bi bi-arrow-down short-arrow"></i></div>
                      <h4 class="text-stage5 mt-2 mb-0 fw-black">結 案</h4>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
/* 
  Custom Pastel Color Palette for Flowchart
  Designed to harmonize with --bs-primary: #91a7d0 
*/
.bg-stage1 { background-color: #91a7d0 !important; color: #fff !important; }
.text-stage1 { color: #91a7d0 !important; }
.border-stage1 { border-color: #91a7d0 !important; border-top-width: 4px !important; }

.bg-stage2 { background-color: #9abfb6 !important; color: #fff !important; }
.text-stage2 { color: #739f96 !important; }
.border-stage2 { border-color: #9abfb6 !important; border-top-width: 4px !important; }

.bg-stage3 { background-color: #c9baa8 !important; color: #fff !important; }
.text-stage3 { color: #ac9a86 !important; }
.border-stage3 { border-color: #c9baa8 !important; border-top-width: 4px !important; }

.bg-stage4 { background-color: #e5b99e !important; color: #fff !important; }
.text-stage4 { color: #cf9b7d !important; }
.border-stage4 { border-color: #e5b99e !important; border-top-width: 4px !important; }

.bg-stage5 { background-color: #e7c674 !important; color: #fff !important; }
.text-stage5 { color: #cca544 !important; text-shadow: 0 1px 1px rgba(0,0,0,0.05); }
.border-stage5 { border-color: #e7c674 !important; border-top-width: 4px !important; }

/* Custom Tag Backgrounds */
.tag-bg { background-color: #f7f9fa; }
.badge-soft { background-color: #ffffff; color: #495057; font-weight: 500; }
.tag-no { background-color: #fff5f5; color: #d07d7d; border: 1px solid #f2c7c7; }
.tag-yes { background-color: #f2f9f6; color: #6e9f8a; border: 1px solid #c8e0d6; }
.tag-warn { background-color: #fff9ed; color: #d6ad60; border: 1px solid #f3dec2; }

/* Basic Animations */
.animate-fade-in {
  animation: fadeIn 0.4s ease-in-out;
}
@keyframes fadeIn {
  from { opacity: 0; transform: translateY(10px); }
  to { opacity: 1; transform: translateY(0); }
}

/* Timeline Custom Styles */
.timeline-container {
  position: relative;
  max-width: 800px;
  margin: 0 auto;
  padding-top: 1rem;
}

/* The vertical main line */
.timeline-container::before {
  content: '';
  position: absolute;
  top: 0;
  bottom: 0;
  left: 24px;
  width: 4px;
  background: #eaeef1; /* Softer gray line */
  border-radius: 4px;
}

/* Responsive Line adjustments */
@media (min-width: 768px) {
  .timeline-container::before {
    left: 50%;
    transform: translateX(-50%);
  }
}

.timeline-item {
  position: relative;
  margin-bottom: 2.5rem;
}

.timeline-item:last-child {
  margin-bottom: 0;
}

/* The icons on the line */
.timeline-icon {
  position: absolute;
  top: 0;
  left: 8px; /* centering magic against 24px line */
  width: 36px;
  height: 36px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.25rem;
  z-index: 2;
  box-shadow: 0 0 0 4px #f8f9fa; /* matches bg-gray approx/or page bg */
}

@media (min-width: 768px) {
  .timeline-icon {
    left: 50%;
    transform: translateX(-50%);
    width: 44px;
    height: 44px;
    font-size: 1.5rem;
  }
}

/* Content box spacing */
.timeline-content {
  position: relative;
  padding-left: 60px;
  width: 100%;
}

@media (min-width: 768px) {
  .timeline-content {
    padding-left: 0;
    width: 45%; 
    /* Alternating left and right layout based on nth-child */
  }
  
  .timeline-item:nth-child(odd) .timeline-content {
    left: 0;
    text-align: right;
  }
  
  .timeline-item:nth-child(even) .timeline-content {
    left: 55%;
    text-align: left;
  }
  
  /* Reset internal alignment for alternating sides */
  .timeline-item:nth-child(odd) .timeline-content .card {
    text-align: left;
  }
  .timeline-item:nth-child(odd) .timeline-content .d-flex {
    justify-content: flex-end; /* for tags etc if needed */
  }
}

/* specific style alignments tweaks */
.decision-block {
  text-align: left;
}
.short-arrow {
  display: block;
  font-size: 0.9rem;
  margin: 2px 0;
}
.fw-black {
  font-weight: 900;
}
</style>
