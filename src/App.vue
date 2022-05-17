<template>
  <div id="app">
    <headerComponent />
    <!-- /#site_header -->
    <mainComponent />
    <!-- /#site_main -->
    <footer id="site_footer">
     <footerTopComponent/>
     <footerBottomComponent/>
    </footer>
    <!-- /#site_footer -->
  </div>
</template>

<script>
import headerComponent from "@/components/headerComponent.vue";
import mainComponent from "@/components/mainComponent.vue";
import footerTopComponent from "@/components/footerTopComponent.vue";
import footerBottomComponent from "@/components/footerBottomComponent.vue";
export default {
  name: "App",
  components: {
    headerComponent,
    mainComponent,
    footerTopComponent,
    footerBottomComponent
  },
  
};
</script>

<style lang="scss">
/* style*/
@import "@/assets/scss/style";
@import "@/assets/scss/partials/_commonRules";


</style>
