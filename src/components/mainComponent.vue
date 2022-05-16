<template>
  <main id="site_main">
    <whoWeAre />
    <mainServices />
    <section class="procedure">
      <div class="container">
        <div class="row text-center">
          <small class="text_green font_500">HOW IT WORKS IN PRACTICE</small>
          <div class="excellence d-flex justify-content-center mt-4">
            <h2 class="light_excellence text_dark_green bg_light font_900">
              Logistical
            </h2>
            <h2 class="font_900">Procedure</h2>
          </div>
          <p class="font_200 m-2">
            We work with innovative methodologies to ensure that the entire
            delivery process <br> is done from start to finish as planned
          </p>
        </div>
      </div>
      <hr class="line" />
      <div class="large_container">
        <div class="row text-center">
          <div class="col d-flex flex-column align-items-center">
            <div class="number_line d-flex justify-content-center">
              <p class="font_500">01</p>
            </div>
            <h5 class="mt-3">Collection of information</h5>
            <p class="font_200">Lorem ipsum dolor sit amet consectetur.</p>
          </div>
          <div class="col d-flex flex-column align-items-center">
            <div class="number_line d-flex justify-content-center">
              <p class="font_500">02</p>
            </div>
            <h5 class="mt-3">Service Invoice Sending</h5>
            <p class="font_200">Lorem ipsum dolor sit amet consectetur.</p>
          </div>
          <div class="col d-flex flex-column align-items-center">
            <div class="number_line d-flex justify-content-center">
              <p class="font_500">03</p>
            </div>
            <h5 class="mt-3">Widthdrawal of Cargo</h5>
            <p class="font_200">Lorem ipsum dolor sit amet consectetur.</p>
          </div>
          <div class="col d-flex flex-column align-items-center">
            <div class="number_line d-flex justify-content-center">
              <p class="font_500">04</p>
            </div>
            <h5 class="mt-3">Transport Customer Order</h5>
            <p class="font_200">Lorem ipsum dolor sit amet consectetur.</p>
          </div>
          <div class="col d-flex flex-column align-items-center">
            <div class="number_line d-flex justify-content-center">
              <p class="font_500">05</p>
            </div>
            <h5 class="mt-3">Successful Delivery</h5>
            <p class="font_200">Lorem ipsum dolor sit amet consectetur.</p>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>

<script>
import whoWeAre from "@/components/whoWeAreComponent.vue";
import mainServices from "@/components/mainServicesComponent.vue";
export default {
  name: "mainComponent",
  components: {
    whoWeAre,
    mainServices,
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/scss/variables.scss";
@import "@/assets/scss/partials/_commonRules";

.procedure {
  padding: 6rem 0;
  background-color: $bg-light-green;
  .large_container {
    max-width: 1400px;
    margin: -30px auto 0;
  }
  .col {
    width: 100%;
  }
  .line {
    height: 4px;
    color: $font-button-dark;
  }
  .number_line {
    width: 25px;
    height: 25px;
    background-color: rgb(180, 206, 206);
    border-radius: 50%;
    p {
      color: $font-button-dark;
    }
  }
}
</style>