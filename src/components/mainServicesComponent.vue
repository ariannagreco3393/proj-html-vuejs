<template>
  <section class="main_services bg_dark">
    <div class="container">
      <div class="row">
        <small class="text_green font_500">ROAD TRANSPORT</small>
        <div class="excellence d-flex align-items-center mt-4">
          <h2 class="text-light font_900">Main</h2>
          <h2 class="services text-light font_900">Services</h2>
        </div>
        <div class="col-8">
          <p class="text-light font_200">
            With all of this expertise and capability comes an unrivalled
            commitment tu customer service. We eill word hard to understand your
            needs in order to develop a produvtive, long-term partenrship.
          </p>
        </div>
        <div class="col-4 text-end align-self-center">
          <button class="transparent_btn">SEE ALL</button>
        </div>
      </div>
      <div class="row">
        <div class="col-4">
          <div class="square text-light">
            <div class="d-flex justify-content-between">
              <font-awesome-icon
                class="main_icon"
                icon="fa-solid fa-truck-ramp-box"
              />

              <font-awesome-icon
                class="arrow_icon"
                icon="fa-solid fa-arrow-right"
              />
            </div>
            <h5 class="mt-3">Technology</h5>
            <p class="font_200 mt-3">
              We are continualy focused on developing technology solutions
              adapted our client's needs.
            </p>
          </div>
        </div>
        <div class="col-4">
          <div class="square text-light">
            <div class="d-flex justify-content-between">
              <font-awesome-icon
                class="main_icon"
                icon="fa-solid fa-temperature-low"
              />

              <font-awesome-icon
                class="arrow_icon"
                icon="fa-solid fa-arrow-right"
              />
            </div>
            <h5 class="mt-3">Reefer Cargo</h5>
            <p class="font_200 mt-3">
              Regular and frequent monitoring fromt the receipt of the loaded
              container to final destination.
            </p>
          </div>
        </div>
        <div class="col-4">
          <div class="square text-light">
            <div class="d-flex justify-content-between">
              <font-awesome-icon
                class="main_icon"
                icon="fa-solid fa-boxes-stacked"
              />

              <font-awesome-icon
                class="arrow_icon"
                icon="fa-solid fa-arrow-right"
              />
            </div>
            <h5 class="mt-3">Dry Cargo</h5>
            <p class="font_200 mt-3">
              We work with most types of dry cargo, from vaulable cargo to the
              msot dangerous requiring care.
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "mainServicesComponent",
};
</script>

<style lang="scss" scoped>
@import "@/assets/scss/variables.scss";
@import "@/assets/scss/partials/_commonRules";
</style>