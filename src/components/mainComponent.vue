<template>
  <main id="site_main">
    <whoWeAre />
    <mainServices />
    <procedure />
    <whatAreWeDoing />
    <testimonials />
    <formSection/>
  </main>
</template>

<script>
import whoWeAre from "@/components/whoWeAreComponent.vue";
import mainServices from "@/components/mainServicesComponent.vue";
import procedure from "@/components/procedureComponent.vue";
import WhatAreWeDoing from "@/components/whatAreWeDoingComponent.vue";
import testimonials from "@/components/testimonialsComponent.vue";
import formSection from "@/components/formSectionComponent.vue";
export default {
  name: "mainComponent",
  components: {
    whoWeAre,
    mainServices,
    procedure,
    WhatAreWeDoing,
    testimonials,
    formSection
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/scss/variables.scss";
@import "@/assets/scss/partials/_commonRules";


</style>