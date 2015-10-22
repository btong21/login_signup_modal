function LoginCtrl(api, $location) {
  this.api = api;
  this.$location = $location;
  this.user = 'lalala';
}

LoginCtrl.prototype.createAccount = function() {
  var self = this;

  this.api.createAccount(this.username, this.password)
    .then(function() {
      // login user after successful account creation
    	self.api.login(self.username, self.password).then(function() {
    		self.$location.path('/profile');
    	});
    });
};

LoginCtrl.prototype.login = function() {
  var self = this;
  this.api.login(this.username, this.password)
    .then(function() {
      self.$location.path('/profile');
    });
};



angular.module('userApp').controller('LoginCtrl', LoginCtrl);