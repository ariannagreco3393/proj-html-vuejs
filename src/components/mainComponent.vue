<template>
  <main id="site_main">
    <section class="who_we_are">
      <div class="container">
        <div class="row">
          <div class="col-9">
            <small class="text_green font_500">WHO WE ARE</small>
            <div class="excellence d-flex align-items-center mt-4">
              <div
                class="
                  light_excellence
                  text_dark_green
                  bg_light
                  d-flex
                  align-items-center
                "
              >
                <font-awesome-icon class="diamond" icon="fa-regular fa-gem" />
                <h2 class="font_900">Excellence</h2>
              </div>
              <h2 class="font_900">in Transport</h2>
            </div>
            <div class="excellence_description mt-4">
              <p class="">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Perspiciatis aspernatur nihil placeat iure quidem, odio nemo
                veritatis reiciendis molestiae dolorum quasi sapiente,
                accusantium corporis cum libero!
              </p>
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Perspiciatis aspernatur nihil placeat iure quidem, odio nemo
                veritatis reiciendis molestiae dolorum quasi sapiente
              </p>
              <div class="important_paragraph">
                <p>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Deserunt nesciunt harum rerum dignissimos quidem odit ipsum
                  laboriosam, esse ad quod magnam est?
                </p>
              </div>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Veniam
                esse minima expedita!
              </p>
              <ul>
                <li>Lorem ipsum dolor sit amet.</li>
                <li>consectetur adipisicing elit</li>
                <li>Lorem ipsum dolor sit amet.</li>
                <li>consectetur adipisicing elit</li>
                <li>Lorem ipsum dolor sit amet.</li>
              </ul>
            </div>
          </div>
          <div class="col-3">
            <h5>Vehicle Types</h5>
            <div class="camion d-flex align-items-center">
              <div class="camion_img">
                <img class="img-fluid" src="@/assets/img/truck-1.png" alt="" />
              </div>
              <div class="description">
                <h6 class="my-2">Light</h6>
                <p class="fs_7 font_100">Max Weight 1200kg</p>
              </div>
            </div>
            <div class="camion d-flex align-items-center">
              <div class="camion_img">
                <img class="img-fluid" src="@/assets/img/truck-1.png" alt="" />
              </div>
              <div class="description">
                <h6 class="my-2">Medium</h6>
                <p class="fs_7 font_100">Max Weight 6000kg</p>
              </div>
            </div>
            <div class="camion d-flex align-items-center">
              <div class="camion_img">
                <img class="img-fluid" src="@/assets/img/truck-1.png" alt="" />
              </div>
              <div class="description">
                <h6 class="my-2">Heavy</h6>
                <p class="fs_7 font_100">Max Weight 24000kg</p>
              </div>
            </div>
            <h5 class="mt-5">Certifications</h5>
            <div class="cartification_img">
              <img
                width="120px"
                class="img-fluid"
                src="@/assets/img/certificate.png"
                alt=""
              />
              <img
                width="120px"
                class="img-fluid"
                src="@/assets/img/certificate.png"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>

<script>
export default {
  name: "mainComponent",
};
</script>

<style lang="scss" scoped>
@import "@/assets/scss/variables.scss";
@import "@/assets/scss/partials/_commonRules";

.who_we_are {
  padding: 6rem 0;
}

.excellence {
  gap: 0.5rem;
  .light_excellence {
    gap: 0.5rem;
    border-radius: 5px;
    padding: 0 0.5rem;
  }
  .diamond {
    height: 30px;
  }
  
}

.excellence_description {
      margin-right: 100px;
      font-weight: 200;
      .important_paragraph {
          font-style: italic;
          background-color: rgba(218, 236, 237, 0.234);
          border-left: 5px solid rgba(218, 236, 237);
          padding: 0rem 2rem;
      }
  }
.camion {
  border-bottom: 0.5px solid black;
  .camion_img {
    background-color: $light-blue;
    padding: 0.3rem;
    border-radius: 5px;
    box-shadow: 2px 2px 5px #dedede;
  }
  img {
    width: 70px;
  }
  .description {
    margin-left: 1rem;
    line-height: 10px;
  }
}

.cartification_img {
  img {
    box-shadow: 2px 2px 5px #dedede;
    margin-right: 1rem;
  }
}
</style>