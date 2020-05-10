<template>
  <div id="app">
    <Navbar></Navbar>
    <div class="container">
      <router-view></router-view>
    </div>
    <hr />
    <div class="container-fluid">
      <div class="row justify-content-center">
        <a href="https://github.com/dtamura" target="_blank">
          <img src="https://image.flaticon.com/icons/svg/25/25231.svg" width="30" height="20" />
        </a>
      </div>
    </div>
  </div>
</template>

<script>
import Navbar from "./components/Navbar";
export default {
  name: "App",
  created() {},
  components: {
    Navbar: Navbar
  },
  data() {
    return {
      loading: false,
      size: "15px"
    };
  }
};
</script>

<style>
.loader {
  position: absolute;
  left: 10px;
  top: 55px;
}
</style>
