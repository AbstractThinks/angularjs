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
	})
	.controller('myController', function ($scope) {
	    $scope.name = 'Lovesueee'; // 给$scope赋值
	    this.name = 'maxin'; // 给controller实例赋值
	    this.say = function () {
	    	console.log(this.name);
	    }
	});
angular
	.module('myApp.home')
	// .directive('myDirective', function () {
	// 	return {
	// 		restrict: 'A',
	// 		replace: true,
	// 		scope: true,
	// 		template: '<span>helloe world</span>',
	// 		compile: function (tElemnet) {
	// 			console.log('compile: ' + tElemnet);
	// 			return function (scope, elem) {
	// 				console.log('link: ' + elem);
					
	// 			}
	// 		}
	// 	}
	// })
	.directive('myDirective', function () {
	   return {
	       controller: 'myController',
	       link: function (scope, elem, attrs, ctrl) {
	       		console.log(scope);
	            console.log(ctrl); //ctrl为controller对象
	            ctrl.name = "min";
	            ctrl.say();
	       }
	   } 
	})
	.directive('myParent', function () {
	    return {
	        restrict: 'EA',
	        template: '<div>{{greeting}}{{name}}'+
	        '<my-child></my-child>'+
	        '</div>',
	        controller: function(){
	            this.name = 'Lovesueee';
	        },
	        link: function(scope,elem,attr,ctrl){
	        	console.log(ctrl.name)
	            scope.name = ctrl.name;
	            scope.greeting = 'Hey, I am ';
	        }
	    };
	})
	.directive('myChild', function () {
	    return {
	        restrict: 'EA',
	        require: '^myParent', // 引用父指令的controller
	        template: '<div>{{says}}</div>',
	        link: function(scope,elem,attr,ctrl){
	        	console.log(ctrl.name="test")
	            scope.says = 'Hey, I am child, and my parent is '+ ctrl.name;
	        }
	    };
	});;
	// .directive('myDirective', function () {
	// 	return {
	// 		restrict: 'A',
	// 		replace: true,
	// 		scope: true,
	// 		template: '<span>helloe world</span>',
	// 		compile: function (tElemnet) {
	// 			console.log('compile: ' + tElemnet);
	// 			return function (scope, elem) {
	// 				console.log('link: ' + elem);
					
	// 			}
	// 		}
	// 	}
	// });

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
