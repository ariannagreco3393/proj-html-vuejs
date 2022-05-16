<template>
  <section class="what_are_we_doing">
    <div class="container">
      <div class="row text-center">
        <small class="text_green font_500">WHAT ARE WE DOING</small>
        <div class="excellence text-light d-flex justify-content-center mt-4">
          <h2 class="results text-light font_900">Results</h2>
          <h2 class="text-light font_900">In Numbers</h2>
        </div>
      </div>
      <div class="row mt-5">
        <div class="col-3">
          <div class="result_number text-center">
            <h4>128</h4>
            <h6>Certifications</h6>
          </div>
        </div>
        <div class="col-3">
          <div class="result_number text-center">
            <h4>230</h4>
            <h6>Employees</h6>
          </div>
        </div>
        <div class="col-3">
          <div class="result_number text-center">
            <h4>517</h4>
            <h6>Customers</h6>
          </div>
        </div>
        <div class="col-3">
          <div class="result_number text-center">
            <h4>94</h4>
            <h6>Countries Served</h6>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "WhatAreWeDoingComponent",
};
</script>

<style lang="scss" scoped>
@import "@/assets/scss/variables.scss";
@import "@/assets/scss/partials/_commonRules";
</style>