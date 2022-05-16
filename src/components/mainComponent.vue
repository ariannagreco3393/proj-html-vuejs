<template>
  <main id="site_main">
    <whoWeAre />
    <mainServices />
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
</style>