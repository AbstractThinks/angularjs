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