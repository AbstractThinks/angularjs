angular
	.module('myApp', ['ngRoute', 'ngAnimate','myApp.services', 'myApp.header', 'myApp.user', 'myApp.home'])
	.config(function($routeProvider, UserProvider) {
        UserProvider.setBackendUrl("http://myApiBackend.com/api");
        $routeProvider
            // home page
            .when('/', {
                templateUrl: './vendor/home/tpl/home.html',
                controller: 'homeController'
            })

            // user page
            .when('/user', {
                templateUrl: './vendor/user/tpl/user.html',
                controller: 'userController'
            })

});
// angular.module('myApp.aside', []);
angular.module('myApp.header', []);
angular.module('myApp.home', ['myApp.services']);
angular.module('myApp.services', []);
angular.module('myApp.user', []);
angular
	.module('myApp.header')
	.controller('headerController', function ($scope) {
		$scope.base = {};
		$scope.base.data = {
			test : 'test',
			test2 : 'test2'
		}
	});


angular
	.module('myApp.home')
	.controller('homeController', function (UserService) {
		var test = UserService.getService();
		console.log(test);
		test.setName("test");
		console.log(test);
	});
angular
	.module('myApp.home')
	.directive('myDirective', function () {
		return {
			restrict: 'A',
			replace: true,
			scope: true,
			template: '<span>helloe world</span>',
			compile: function (tElemnet) {
				console.log('compile: ' + tElemnet);
				return function (scope, elem) {
					console.log('link: ' + elem);
					
				}
			}
		}
	});
angular.module('myApp.services')
.provider('User', function() {
  this.backendUrl = "http://localhost:3000";
  this.setBackendUrl = function(newUrl) {
    if (newUrl) this.backendUrl = newUrl;
  }
  this.$get = function($http) { // injectables go here
    var self = this;
    var service = {
      user: {},
      setName: function(newName) {
        service.user['name'] = newName;
      },
      setEmail: function(newEmail) {
        service.user['email'] = newEmail;
      },
      save: function() {
        return $http.post(self.backendUrl + '/users', {
          user: service.user
        })
      }
    };
    return service;
  }
});
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
// angular
//   .module('myApp.services')
//   .service('UserService', function($http) {
//       var self = this;
//       this.setName = function(newName) {
//         self.user['name'] = newName;
//       };
//       this.setEmail = function(newEmail) {
//         self.user['email'] = newEmail;
//       };
//   });
angular
	.module('myApp.user')
	.controller('userController', function () {
		
	});
