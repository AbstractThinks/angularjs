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