<template>
  <nav class="navbar navbar-expand-md navbar-light bg-white shadow-sm">
    <div class="container">
      <router-link class="navbar-brand" to="/">Laravel</router-link>
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <!-- Left Side Of Navbar -->
        <ul class="navbar-nav mr-auto">
          <li class="nav-item">
            <router-link to="/about" class="nav-link">About</router-link>
          </li>
        </ul>

        <!-- Right Side Of Navbar -->
        <ul class="navbar-nav ml-auto">
          <li class="nav-item" v-if="userState.authenticated">{{ userState.user.name }}</li>
          <li class="nav-item" v-if="userState.authenticated">
            <a @click="logout()" class="nav-link">Log out</a>
          </li>
          <!-- Authentication Links -->
          <li class="nav-item" v-else>
            <router-link class="nav-link" to="/login">Login</router-link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
import userStore from "../store/userStore";

export default {
  data() {
    return {
      userState: userStore.state
    };
  },
  methods: {
    logout() {
      userStore.logout()
    }
  }
};
</script>
