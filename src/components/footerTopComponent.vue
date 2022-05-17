<template>
  <section class="footer_top">
    <div class="container">
      <div class="row">
        <div class="col-3 logo">
          <a class="navbar-brand nex text_green" href="#">NEX</a>
          <a class="navbar-brand gen text-light" href="#">GEN</a>
          <p class="text-light font_200 mt-4">
            A Functional HTML Template for Corporate & Business
          </p>
          <div class="info_details light_gray font_100">
            <div class="phone">
              <font-awesome-icon icon="fa-solid fa-phone" />
              <small class="ms-2">+1 (305) 1234-5678</small>
            </div>
            <div class="email mt-2">
              <font-awesome-icon icon="fa-solid fa-envelope" />
              <small class="ms-2">hello@example.com</small>
            </div>
            <div class="location mt-2">
              <font-awesome-icon class="icon" icon="fa-solid fa-location-dot" />
              <small class="ms-2">Main Avenue, 987</small>
            </div>
            <button class="transparent_btn hover_light_btn mt-4">GET IN TOUCH</button>
          </div>
        </div>
        <div
          class="col-3 text-light"
          v-for="(item, index) in secondaryMenu"
          :key="index"
        >
          <div class="wrapper">
            <h5 class="title_secondary_menu">{{ item.title }}</h5>
            <div class="link_secondary_menu d-flex align-items-center gap-2"  v-for="link in secondaryMenu[index].links"
                :key="link.id">
              <font-awesome-icon class="text-secondary" icon="fa-solid fa-angle-right" />
              <a
                class="item_secondary_menu d-flex py-1 font_200 text-secondary"
               
                >{{ link.text }}</a
              >
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "footerTopComponent",
  data() {
    return {
      secondaryMenu: [
        {
          title: "About",
          links: [
            {
              id: 1,
              href: "#",
              text: "The Company",
            },
            {
              id: 2,
              href: "#",
              text: "Institutional",
            },
            {
              id: 3,
              href: "#",
              text: "Social & Events",
            },
            {
              id: 4,
              href: "#",
              text: "Innovation",
            },
            {
              id: 5,
              href: "#",
              text: "Environment",
            },
            {
              id: 6,
              href: "#",
              text: "Technology",
            },
          ],
        },
        {
          title: "Transport",
          links: [
            {
              id: 1,
              href: "#",
              text: "Industrialized",
            },
            {
              id: 2,
              href: "#",
              text: "Chemicals",
            },
            {
              id: 3,
              href: "#",
              text: "Packaged Liquids",
            },
            {
              id: 4,
              href: "#",
              text: "Construction",
            },
            {
              id: 5,
              href: "#",
              text: "Laminated Wood",
            },
            {
              id: 6,
              href: "#",
              text: "And others",
            },
          ],
        },
        {
          title: "Support",
          links: [
            {
              id: 1,
              href: "#",
              text: "Responsibility",
            },
            {
              id: 2,
              href: "#",
              text: "Terms of Use",
            },
            {
              id: 3,
              href: "#",
              text: "About Cookies",
            },
            {
              id: 4,
              href: "#",
              text: "Privacy Policy",
            },
            {
              id: 5,
              href: "#",
              text: "Accessibility",
            },
            {
              id: 6,
              href: "#",
              text: "Information",
            },
          ],
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