<template>
  <button class="get_in_touch">GET IN TOUCH</button>
</template>

<script>
export default {
  name: "getInTouchComponent",
};
</script>

<style lang="scss" scoped>
@import "@/assets/scss/variables.scss";

.get_in_touch {
  background-color: $font-button-dark;
  color: $white;
  padding: 0.5rem 1.5rem;
  border-radius: 3px;
  margin-left: 1rem;
}
</style>