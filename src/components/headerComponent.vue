<template>
  <header id="site_header">
    <section class="topbar">
      <div class="container">
        <div class="row align-items-center">
          <div class="col-6">
            <div
              class="hours d-flex align-items-center light_gray fs-7 font_100"
            >
              <font-awesome-icon icon="fa-solid fa-clock" />
              <small class="ms-2">Open Hours: Mon - Sat - 9:00 - 18:00</small>
            </div>
          </div>
          <!-- /hours -->
          <div class="col-6">
            <div
              class="
                info_details
                d-flex
                justify-content-end
                align-items-center
                light_gray
                fs-7
                font_100
              "
            >
              <font-awesome-icon icon="fa-solid fa-phone" />
              <small class="ms-2">+1 (305) 1234-5678</small>
              <font-awesome-icon class="ms-4" icon="fa-solid fa-envelope" />
              <small class="ms-2">hello@example.com</small>
              <font-awesome-icon class="ms-4" icon="fa-brands fa-facebook-f" />
              <font-awesome-icon class="ms-4" icon="fa-brands fa-twitter" />
              <font-awesome-icon class="ms-4" icon="fa-brands fa-linkedin-in" />
            </div>
          </div>
          <!-- /info_details -->
        </div>
      </div>
    </section>
    <!-- /topbar -->
    <section class="jumbotron">
      
    
    </section>
  </header>
</template>

<script>
export default {
  name: "headerComponent",
};
</script>