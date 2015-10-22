
function ApiService($http) {
  this.$http = $http;
}

angular.module('userApp').service('api', ApiService);

var BASE_URL = 'https://mock-login-server.herokuapp.com/api/';
var LOGIN_URL = BASE_URL + 'login';
var LOGOUT_URL = BASE_URL + 'logout';
var PROFILE_URL = BASE_URL + 'user';
var CREATE_ACCOUNT_URL = BASE_URL + 'createAccount';

ApiService.prototype.login = function(username, password) {
  return this.$http.post(LOGIN_URL, {username: username, password: password})
  .then(function(response) {
    localStorage.authToken = response.data.authToken;
  });
};

ApiService.prototype.logout = function() {
  return this.$http.post(LOGOUT_URL);
};

ApiService.prototype.getProfile = function() {
  return this.$http.get(PROFILE_URL)
    .then(function(response) {
      return response.data;
    });
};

ApiService.prototype.createAccount = function(username, password) {
  return this.$http.post(CREATE_ACCOUNT_URL, {username: username, password: password});
};