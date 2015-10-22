var app = angular.module('userApp', ['ngRoute']);

app.config(function($routeProvider, $httpProvider) {
  $routeProvider
    .when('/login', {
      templateUrl: 'templates/login.html',
      controller: 'LoginCtrl as ctrl'
    })
    .when('/profile', {
      templateUrl: 'templates/profile.html',
      controller: 'ProfileCtrl as ctrl',
      resolve: {
        user: function(api, $location) {
          return api.getProfile()
            .catch(function() {
              $location.path('/login');
            });
        }
      }
    })
    .otherwise({
      redirectTo: '/profile'
    });


  $httpProvider.interceptors.push(function() {
    return {
      'request': function(config) {
        config.headers = config.headers || {};
        if (localStorage.authToken) {
          config.headers.Authorization = localStorage.authToken;
        }
        return config;
      }
    };
  });
});