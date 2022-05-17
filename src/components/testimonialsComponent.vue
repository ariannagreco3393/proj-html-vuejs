<template>
  <section class="testimonials bg_dark">
    <a id="testimonials"></a>

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
          <h2 class="feedback text-light font_900">Feedback</h2>
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
</template>

<script>
export default {
  name: "testimonialComponent",
};
</script>

<style lang="scss" scoped>
@import "@/assets/scss/variables.scss";
@import "@/assets/scss/partials/_commonRules";
</style>