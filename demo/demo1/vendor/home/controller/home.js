angular
	.module('myApp.home')
	.controller('homeController', function (UserService) {
		var test = UserService.getService();
		console.log(test);
		test.setName("test");
		console.log(test);
	});