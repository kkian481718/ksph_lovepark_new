<script setup>
import Navbar from './components/Navbar.vue';
import Hero from './components/Hero.vue';
import Flowchart from './components/Flowchart.vue';
import Preface from './components/Preface.vue';
import About from './components/About.vue';
import Courses from './components/Courses.vue';
import Contact from './components/Contact.vue';
</script>

<template>
  <Navbar />
  <Hero />
  <Flowchart />
  <Preface />
  <About />
  <Courses />
  <Contact />
</template>

<style>
/* 手機版排版與易讀性優化 */
.text-justify {
  text-align: justify;
  text-justify: inter-ideograph;
}

@media (max-width: 768px) {
  /* 增加段落空間 */
  .mobile-paragraph p {
    margin-bottom: 1.5rem !important;
  }
  
  /* 優化聊天泡泡在手機上的點擊範圍與閱讀清晰度 */
  .chat {
    padding: 8px 17px !important;
    font-size: 1rem !important;
  }
  
  /* 原本的行高與 padding 可微調 */
  body {
    font-size: 1rem;
  }
}
</style>
