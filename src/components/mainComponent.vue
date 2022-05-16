<template>
  <main id="site_main">
    <whoWeAre />
    <mainServices />
    <procedure />
    <whatAreWeDoing />
    <section class="main_services bg_dark">
      <div class="container">
        <div class="row text-center">
          <small class="text_green font_500">CUSTOMER TESTIMONIALS</small>
          <div
            class="
              excellence
              d-flex
              align-items-center
              justify-content-center
              mt-4
            "
          >
            <h2 class="text-light font_900">Trusted</h2>
            <h2 class="services text-light font_900">Feedback</h2>
          </div>
          <p class="font_200 m-2 text-light">
            We work with innovative methodologies to ensure that the entire
            delivery process <br />
            is done from start to finish as planned
          </p>
        </div>
        <div class="row mt-4">
          <div class="col-4">
            <div class="square text-light">
              <img
                height="30px"
                class="testimonial_logo"
                src="@/assets/img/logo-1.png"
                alt=""
              />
              <p class="font_200 mt-3">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam
                voluptatibus pariatur libero debitis quod et nesciunt adipisci
                quae asperiores reprehenderit. Lorem ipsum dolor sit.
              </p>
              <div class="quote_icon d-flex justify-content-end">
                <font-awesome-icon
                  class="text-secondary fs-4"
                  icon="fa-solid fa-quote-right"
                />
              </div>
            </div>
          </div>
          <div class="col-4">
            <div class="square text-light">
              <img
                height="30px"
                class="testimonial_logo"
                src="@/assets/img/logo-2.png"
                alt=""
              />
              <p class="font_200 mt-3">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam
                voluptatibus pariatur libero debitis quod et nesciunt adipisci
                quae asperiores reprehenderit. Lorem ipsum dolor sit.
              </p>
              <div class="quote_icon d-flex justify-content-end">
                <font-awesome-icon
                  class="text-secondary fs-4"
                  icon="fa-solid fa-quote-right"
                />
              </div>
            </div>
          </div>
          <div class="col-4">
            <div class="square text-light">
              <img
                height="30px"
                class="testimonial_logo"
                src="@/assets/img/logo-3.png"
                alt=""
              />
              <p class="font_200 mt-3">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam
                voluptatibus pariatur libero debitis quod et nesciunt adipisci
                quae asperiores reprehenderit. Lorem ipsum dolor sit.
              </p>
              <div class="quote_icon d-flex justify-content-end">
                <font-awesome-icon
                  class="text-secondary fs-4"
                  icon="fa-solid fa-quote-right"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>

<script>
import whoWeAre from "@/components/whoWeAreComponent.vue";
import mainServices from "@/components/mainServicesComponent.vue";
import procedure from "@/components/procedureComponent.vue";
import WhatAreWeDoing from "@/components/whatAreWeDoingComponent.vue";
export default {
  name: "mainComponent",
  components: {
    whoWeAre,
    mainServices,
    procedure,
    WhatAreWeDoing,
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/scss/variables.scss";
@import "@/assets/scss/partials/_commonRules";

.square {
  .testimonial_logo {
    filter: invert(1);
  }
}
</style>