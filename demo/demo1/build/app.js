angular
	.module('myApp', ['ngRoute', 'ngAnimate','myApp.header', 'myApp.user', 'myApp.home'])
	.config(function($routeProvider) {

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
angular.module('myApp.home', []);
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
	.controller('homeController', function () {
		
	});

angular
	.module('myApp.user')
	.controller('userController', function () {
		
	});
