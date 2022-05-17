<template>
  <section class="footer_bottom">
    <div class="container">
      <div class="row text-light font_200 align-items-center">
        <div class="col-6">
          <div>
            Enjoy the low price. We are tracking any intention of piracy.
          </div>
        </div>
        <div class="col-6 d-flex justify-content-between align-items-center">
          <div>© 2020 NEXGEN is Proudly Powered by <span>Codings</span></div>
          <button @click="backToTheTop" class="d-flex justify-content-center align-items-center">
            <font-awesome-icon icon="fa-solid fa-arrow-up" />
          </button>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "footerBottomComponent",
  methods: {
    backToTheTop() {
      document.body.scrollTop = 0;
      document.documentElement.scrollTop = 0;
    },
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/scss/style";
@import "@/assets/scss/variables.scss";
@import "@/assets/scss/partials/_commonRules";

button {
  width: 30px;
  height: 30px;
  border-radius: 50%;
  background-color: rgb(63, 60, 60);
  &:hover {
    background-color: white;
  }
}
</style>