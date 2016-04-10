#ng-app

>项目初始化模块

`angular.module('myApp', ['ngRoute', 'ngAnimate', 'myApp.user', 'myApp.home'])`

`angular应用初始化模块，并将依赖的模块注入`

***

#ngRoute

>路由模块

    angular
	    .module('myApp', ['ngRoute', 'ngAnimate', 'myApp.user', 'myApp.home'])
	    .config(function($routeProvider) {  
		    $routeProvider
		    .when('/', {
			    templateUrl: './vendor/home/tpl/home.html',
			    controller: 'homeController'
		    })
		    .when('/user', {
			    templateUrl: './vendor/user/tpl/user.html',
			    controller: 'userController'
	    	})
    	});

在页面中定义`ng-view`指令，例：`<div ng-view></div>`

#controller

>控制器模块

***

#directive

>指令模块

###内部指令

>`ng-model` 指令用于绑定应用程序数据到 HTML 控制器`(input, select, textarea)`的值。
>而`{{}}`和`ng-bind`是用于从`controller`中得到数据然后显示在view中的