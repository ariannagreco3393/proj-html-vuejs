<template>
  <main id="site_main">
    <whoWeAre />
    <mainServices />
    <procedure />
    <whatAreWeDoing />
    <testimonials />
    <section class="get_in_touch">
      <div class="container">
        <div class="row">
          <div class="col-8">
            <small class="text_green font_500">SEND A MESSAGE</small>
            <div class="excellence d-flex align-items-center mt-4">
              <h2 class="font_900">Get in</h2>
              <div
                class="
                  light_excellence
                  text_dark_green
                  bg_light
                  d-flex
                  align-items-center
                "
              >
                <h2 class="font_900">Touch</h2>
              </div>
            </div>
            <p class="font_200 mt-2">
              We will respond to your message as soon as possible.
            </p>
            <form>
              <div class="form-group d-flex">
                <input
                  type="tesxt"
                  class="form-control form"
                  id="exampleFormControlInput1"
                  placeholder="Name"
                />
                <input
                  type="email"
                  class="form-control form"
                  id="exampleFormControlInput1"
                  placeholder="Email"
                />
              </div>
              <div class="form-group d-flex mt-2">
                <input
                  type="text"
                  class="form-control form"
                  id="exampleFormControlInput1"
                  placeholder="Phone"
                />
                <select class="form-control form">
                  <option>More Info</option>
                  <option>2</option>
                  <option>3</option>
                  <option>4</option>
                  <option>5</option>
                </select>
              </div>
              <div class="form-group mt-2">
                <textarea
                  placeholder="Message"
                  class="form-control form"
                  id="exampleFormControlTextarea1"
                  rows="8"
                ></textarea>
                <button class="send mt-4">SEND</button>
              </div>
            </form>
          </div>
          <div class="col-4"></div>
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
import testimonials from "@/components/testimonialsComponent.vue";
export default {
  name: "mainComponent",
  components: {
    whoWeAre,
    mainServices,
    procedure,
    WhatAreWeDoing,
    testimonials,
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/scss/variables.scss";
@import "@/assets/scss/partials/_commonRules";

.get_in_touch {
  padding: 6rem 0;
  .form-group {
    gap: 1rem;
  }
  .form {
    background-color: #ececec;
    border: none;
    color: gray;
  }
  .send {
    background-color: $font-button-dark;
    color: $white;
    padding: 0.5rem 1.5rem;
    border-radius: 3px;
  }

  
}
</style>