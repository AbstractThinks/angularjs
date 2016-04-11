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