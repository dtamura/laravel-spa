<template>
  <div>
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-md-8">
          <div class="card">
            <div class="card-header">Login</div>

            <div class="card-body">
              <form>
                <div class="alert alert-danger" role="alert" v-if="showAlert">{{ alertMessage }}</div>

                <div class="form-group row">
                  <label for="email" class="col-md-4 col-form-label text-md-right">Email Address</label>

                  <div class="col-md-6">
                    <input
                      id="email"
                      type="email"
                      class="form-control"
                      v-model="email"
                      @keyup.enter="login"
                      required
                      autofocus
                    />
                  </div>
                </div>

                <div class="form-group row">
                  <label for="password" class="col-md-4 col-form-label text-md-right">Password</label>

                  <div class="col-md-6">
                    <input
                      id="password"
                      type="password"
                      class="form-control"
                      v-model="password"
                      @keyup.enter="login"
                      required
                      autofocus
                    />
                  </div>
                </div>

                <div class="form-group row mb-0">
                  <div class="col-md-8 offset-md-4">
                    <button @click="login" type="button" class="btn btn-primary">Login</button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import userStore from "../store/userStore";

export default {
  mounted() {
    this.fetchUsers();
  },
  data() {
    return {
      email: "karine.rosenbaum@example.com",
      password: "password",
      users: [],
      showAlert: false,
      alertMessage: ""
    };
  },
  methods: {
    login() {
      userStore.login(
        this.email,
        this.password,
        success => {
          this.$router.push({ path: "/" });
        },
        error => {
          this.showAlert = true;
          this.alertMessage = "Wrong email or password.";
        }
      );
    },
    fetchUsers() {
      window.axios.post("/auth/me").then(res => {
        this.user = res.data;
        this.email = this.user.email;
      });
    }
  }
};
</script>
