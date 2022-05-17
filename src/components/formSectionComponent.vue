<template>
  <section class="get_in_touch">
    <a id="getintouch"></a>

    <div class="container">
      <div class="row">
        <div class="col-7">
          <small class="text_green font_500">SEND A MESSAGE</small>
          <div class="excellence d-flex align-items-center mt-4">
            <h2 class="font_900">Get in</h2>
            <div
              class="
                light_excellence
                text_dark_green
                bg_light
                d-flex
                align-items-center
              "
            >
              <h2 class="font_900">Touch</h2>
            </div>
          </div>
          <p class="font_200 mt-2">
            We will respond to your message as soon as possible.
          </p>
          <form>
            <div class="form-group d-flex">
              <input
                type="tesxt"
                class="form-control form"
                id="exampleFormControlInput1"
                placeholder="Name"
              />
              <input
                type="email"
                class="form-control form"
                id="exampleFormControlInput1"
                placeholder="Email"
              />
            </div>
            <div class="form-group d-flex mt-2">
              <input
                type="text"
                class="form-control form"
                id="exampleFormControlInput1"
                placeholder="Phone"
              />
              <select class="form-control form">
                <option>More Info</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
                <option>5</option>
              </select>
            </div>
            <div class="form-group mt-2">
              <textarea
                placeholder="Message"
                class="form-control form"
                id="exampleFormControlTextarea1"
                rows="6"
              ></textarea>
              <button class="send mt-4">SEND</button>
            </div>
          </form>
        </div>
        <div class="col-1"></div>
        <div class="col-4">
          <h5>Example Inc.</h5>
          <p class="font_200">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
          </p>
          <p class="font_200">
            Architecto illo quisquam eveniet, natus sed quaerat.
          </p>
          <div class="details d-flex flex-column">
            <div class="phone d-flex align-items-center">
              <div class="circle">
                <font-awesome-icon class="icon" icon="fa-solid fa-phone" />
              </div>
              <small class="ms-2">+1 (305) 1234-5678</small>
            </div>
            <div class="email d-flex align-items-center">
              <div class="circle">
                <font-awesome-icon class="icon" icon="fa-solid fa-envelope" />
              </div>
              <small class="ms-2">hello@example.com</small>
            </div>
            <div class="location d-flex align-items-center">
              <div class="circle">
                <font-awesome-icon
                  class="icon"
                  icon="fa-solid fa-location-dot"
                />
              </div>
              <small class="ms-2">Main Avenue, 987</small>
            </div>
            <button class="map_btn">VIEW MAP</button>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "formSection",
};
</script>

<style lang="scss" scoped>
@import "@/assets/scss/variables.scss";
@import "@/assets/scss/partials/_commonRules";
</style>