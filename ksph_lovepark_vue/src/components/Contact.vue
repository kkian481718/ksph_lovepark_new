<script setup>
</script>
<template>
  <section class="page-section" id="contact">
      <div class="container px-4 px-lg-5">
          <div class="row gx-4 gx-lg-5 justify-content-center">
              <div class="col-lg-8 col-xl-6 text-center">
                  <h2 class="mt-0">聯絡我們</h2>
                  <hr class="divider" />
              </div>
          </div>
          <div class="mb-3 text-center">
              <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2189.787028504272!2d120.3233404894357!3d22.625132431666845!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x346e04bc508fdbfb%3A0xd35e0196aaae4923!2z6auY6ZuE5biC56uL5Yex5peL6Yar6Zmi!5e0!3m2!1szh-TW!2stw!4v1721039379697!5m2!1szh-TW!2stw"
                  width="100%" height="300px" style="border:0;" allowfullscreen="true" loading="lazy"
                  referrerpolicy="no-referrer-when-downgrade"></iframe>
          </div>
          <div class="row justify-content-around text-center text-primary">
              <div class="col-lg-5 col-md-12 rounded-2 p-3 gy-lg-0 gy-2">
                  <i class="bi-phone fs-2"></i>
                  <h5 class="">連絡電話</h5>
                  <h3>07-7513171 #2013</h3>
              </div>
              <div class="col-lg-5 col-md-12 rounded-2 p-3 gy-lg-0 gy-2">
                  <i class="bi-envelope fs-2"></i>
                  <h5>Email</h5>
                  <h3>lovegarden.2013@gmail.com</h3>
              </div>
          </div>
      </div>
  </section>

  <!-- Footer-->
  <footer class="bg-light py-5">
      <div class="container px-4 px-lg-5">
          <p class="small text-center">本園地址：高雄市苓雅區凱旋二路130號</p>
          <div class="small text-center text-muted">Copyright &copy; 2002-{{ new Date().getFullYear() }} | Miffy Studio & Love Garden Team (Powered by Vue 3)</div>
      </div>
  </footer>
</template>
