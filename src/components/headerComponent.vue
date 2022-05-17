<template>
  <header id="site_header">
    <topBar/>
    <!-- /topbar -->
    <section class="jumbotron img-fluid">
      <div class="container">
        <div class="row py-3">
          <logoComponent/>
          <!-- /logo -->
          <div class="col-9">
            <div
              class="main_menu d-flex justify-content-end align-items-center"
            >
              <a v-for="item in mainMenu" :key="item.id" :href="item.href">{{
                item.text
              }}</a>
              <div class="user text-light">
                <font-awesome-icon class="icon_user" icon="fa-regular fa-user" />
              </div>
              <getInTouch />
            </div>
          </div>
          <!-- /main_menu -->
        </div>
        <div class="row title">
          <div class="col-5">
            <small class="text_green">LOGISTICS SERVICES</small>
            <h1 class="display-4 text-light font_900">
              CARGO <br />
              TRANSPORT
            </h1>
            <p class="text-light">
              Fractional or esclusive road cargo transportation to all regions
              with small, medium and large vehicles.
            </p>
            <div class="cta">
              <getInTouch />
              <button class="transparent_btn">READ MORE</button>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- /jumbotron -->
  </header>
</template>

<script>
import getInTouch from "@/components/getInTouchComponent.vue";
import topBar from "@/components/topBarComponent.vue";
import logoComponent from "@/components/logoComponent.vue";
export default {
  name: "headerComponent",
  components: {
    getInTouch,
    topBar,
    logoComponent
  },
  data() {
    return {
      mainMenu: [
        {
          id: 1,
          href: "#",
          text: "HOME",
        },
        {
          id: 2,
          href: "#",
          text: "ABOUT",
        },
        {
          id: 3,
          href: "#",
          text: "SERVICES",
        },
        {
          id: 4,
          href: "#",
          text: "PROCESS",
        },
        {
          id: 5,
          href: "#",
          text: "TESTIMONIALS",
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/scss/variables.scss";
@import "@/assets/scss/partials/_commonRules";
</style>