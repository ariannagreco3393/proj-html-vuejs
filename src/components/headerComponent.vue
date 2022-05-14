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
    <section class="jumbotron img-fluid">
      <div class="container">
        <div class="row py-3">
          <div class="col-3 logo">
            <a class="navbar-brand nex text_green" href="#">NEX</a>
            <a class="navbar-brand gen text-light" href="#">GEN</a>
          </div>
          <div class="col-9">
            <div
              class="main_menu d-flex justify-content-end align-items-center"
            >
              <a v-for="item in mainMenu" :key="item.id" :href="item.href">{{item.text}}</a>
              <div class="user text-light">
                <font-awesome-icon icon="fa-regular fa-user" />
              </div>
              <button class="get_in_touch">GET IN TOUCH</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  </header>
</template>

<script>
export default {
  name: "headerComponent",
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

.jumbotron {
  height: 600px;
  background-image: url("@/assets/img/bg-9.jpg");
  background-position: center;
  box-shadow: inset 0 0 0 2000px rgba(35, 34, 34, 0.643);
  .logo {
    font-weight: 500;
    .nex {
      border-top-left-radius: 20px;
      border-bottom-left-radius: 20px;
      padding-left: 2rem;
      padding-right: 3px;
      background-color: rgba(3, 132, 132, 0.257);
    }
    .gen {
      margin-left: -0.7rem;
    }
  }
  .main_menu {
    font-weight: 500;
    font-size: 15px;
    text-transform: uppercase;
    a {
      color: white;
      padding: 0 1rem;
    }

    .user {
      margin: 0 0.8rem;
    }

    .get_in_touch {
      background-color: $font-button-dark;
      color: $white;
      padding: 0.5rem 1.5rem;
      border-radius: 3px;
      margin-left: 1rem;
    }
  }
}
</style>