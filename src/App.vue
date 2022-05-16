<template>
  <div id="app">
    <headerComponent />
    <!-- /#site_header -->
    <mainComponent />
    <!-- /#site_main -->
    <footer id="site_footer">
     <footerTopComponent/>
    </footer>
    <!-- /#site_footer -->
  </div>
</template>

<script>
import headerComponent from "@/components/headerComponent.vue";
import mainComponent from "@/components/mainComponent.vue";
import footerTopComponent from "@/components/footerTopComponent.vue";
export default {
  name: "App",
  components: {
    headerComponent,
    mainComponent,
    footerTopComponent
  },
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

<style lang="scss">
/* style*/
@import "@/assets/scss/style";
@import "@/assets/scss/partials/_commonRules";


</style>
