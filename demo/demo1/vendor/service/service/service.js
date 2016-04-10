angular
  .module('myApp.services')
  .service('UserService', function($http) {
      var self = this;
      this.user = {};
      this.setName = function(newName) {
        self.user['name'] = newName;
      };
      this.setEmail = function(newEmail) {
        self.user['email'] = newEmail;
      };
      this.getService = function () {
        return self;
      }
  });