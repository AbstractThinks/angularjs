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