angular
	.module('myApp.header')
	.controller('headerController', function ($scope) {
		$scope.base = {};
		$scope.base.data = {
			test : 'test',
			test2 : 'test2'
		}
	});
