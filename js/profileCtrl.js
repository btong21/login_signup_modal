function ProfileCtrl($location, api, user) {
  this.$location = $location;
  this.api = api;
  this.user = user;
}

angular.module('userApp').controller('ProfileCtrl', ProfileCtrl);

ProfileCtrl.prototype.logout = function() {
  var self = this;
  
  this.api.logout().then(function() {
    self.$location.path('/login');
  });
}