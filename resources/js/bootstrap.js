import axios from 'axios';
window.axios = axios;

const token = document.querySelector('meta[name="csrf-token"]').getAttribute('content');

axios.defaults.headers.common['X-CSRF-TOKEN'] = token;

window.axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';


