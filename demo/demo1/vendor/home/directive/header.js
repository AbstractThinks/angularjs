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
	        	console.log(ctrl.name);  
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
