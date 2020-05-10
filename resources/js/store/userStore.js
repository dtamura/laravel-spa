export default {
  debug: true,
  state: {
    user: {},
    authenticated: false,
  },

  login(email, password, successCallback = null, errorCallback = null) {
    var login_param = { email: email, password: password }
    return window.axios.post('/auth/login', login_param)
      .then(res => {
        this.state.user = res.data
        this.state.authenticated = true
        this.setCurrentUser()
        successCallback()
      }).catch(e => {
        console.log(e);
        this.state.user = {}
        this.state.authenticated = false
        errorCallback()
      });
  },

  logout() {
    return window.axios.post('/auth/logout').then(() => {
      localStorage.removeItem('jwt-token')
      this.state.authenticated = false
    })
  },

  // Login Check
  setCurrentUser() {
    window.axios.post('/auth/me')
      .then(res => {
        this.state.user = res.data
        this.state.authenticated = true
      }).catch(e => {
        this.state.user = {}
        this.state.authenticated = false
      });
  },

  /**
   * Init the service.
   */
  init() {
    this.setCurrentUser()
  }
}
