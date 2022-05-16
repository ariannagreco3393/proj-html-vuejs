<template>
  <section class="footer_top">
    <div class="container">
      <div class="row">
        <div class="col-3 logo">
          <a class="navbar-brand nex text_green" href="#">NEX</a>
          <a class="navbar-brand gen text-light" href="#">GEN</a>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "footerTopComponent",
};
</script>

<style lang="scss" scoped>
@import "@/assets/scss/variables.scss";
@import "@/assets/scss/partials/_commonRules";

.container {
  max-width: 1200px;
}
.footer_top {
  background-color: $font-dark;
  padding: 6rem 0;
  .logo {
    font-weight: 500;
    .nex {
      border-top-left-radius: 20px;
      border-bottom-left-radius: 20px;
      padding-left: 2rem;
      padding-right: 3px;
      background-color: rgba(3, 132, 132, 0.257);
    }
    .gen {
      margin-left: -0.7rem;
    }
  }
}
</style>