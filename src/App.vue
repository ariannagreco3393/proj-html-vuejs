<template>
  <div id="app">
    <header id="site_header">
      <div class="topbar">
        <div class="container">
          <div class="row align-items-center">
            <div class="col-6">
              <div class="hours d-flex align-items-center light_gray fs-7 font_100">
                <font-awesome-icon icon="fa-solid fa-clock" />
                <small class="ms-2">Open Hours: Mon - Sat - 9:00 - 18:00</small>
              </div>
            </div>
            <div class="col-6"></div>
          </div>
        </div>
      </div>
    </header>
    <!-- /#site_header -->
    <main id="site_main"></main>
    <!-- /#site_main -->
    <footer id="site_footer"></footer>
    <!-- /#site_footer -->
  </div>
</template>

<script>
export default {
  name: "App",
  components: {},
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

<style lang="scss">
/* style*/
@import "@/assets/scss/style";

</style>
