window._ = require('lodash');

/**
 * We'll load jQuery and the Bootstrap jQuery plugin which provides support
 * for JavaScript based Bootstrap features such as modals and tabs. This
 * code may be modified to fit the specific needs of your application.
 */

try {
    window.Popper = require('popper.js').default;
    window.$ = window.jQuery = require('jquery');

    require('bootstrap');
} catch (e) { }

/**
 * We'll load the axios HTTP library which allows us to easily issue requests
 * to our Laravel back-end. This library automatically handles sending the
 * CSRF token as a header based on the value of the "XSRF" token cookie.
 */

window.axios = require('axios');

window.axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';
window.axios.defaults.headers.common['Content-Type'] = 'application/json';
window.axios.defaults.baseURL = '/api'

// Intercept the request to make sure the token is injected into the header.
window.axios.interceptors.request.use(config => {
    config.headers['Authorization'] = `Bearer ${localStorage.getItem('jwt-token')}`
    config.headers['X-CSRF-TOKEN'] = window.Laravel.csrfToken
    return config
})
// Intercept the response and…
window.axios.interceptors.response.use(response => {
    // …get the token from the header or response data if exists, and save it.
    const token = response.headers['Authorization'] || response.data['access_token']
    if (token) {
        localStorage.setItem('jwt-token', token)
    }
    return response
}, error => {
    // Also, if we receive a Bad Request / Unauthorized error
    console.log(error)
    return Promise.reject(error)
})

/**
 * Echo exposes an expressive API for subscribing to channels and listening
 * for events that are broadcast by Laravel. Echo and event broadcasting
 * allows your team to easily build robust real-time web applications.
 */

// import Echo from 'laravel-echo';

// window.Pusher = require('pusher-js');

// window.Echo = new Echo({
//     broadcaster: 'pusher',
//     key: process.env.MIX_PUSHER_APP_KEY,
//     cluster: process.env.MIX_PUSHER_APP_CLUSTER,
//     forceTLS: true
// });
