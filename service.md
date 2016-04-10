#service
>在`Angular`里面，`services`作为单例对象在需要到的时候被创建，只有在应用生命周期结束的时候（关闭浏览器）才会被清除。而`controllers`在不需要的时候就会被销毁了。

***

###factory
>`factory()`让我们通过返回一个包含`service`方法和数据的对象来定义一个`service`
>在`service`方法里面我们可以注入`services`，比如`$http`和`$q`等

	angular
		.module('myApp.services')
		.factory('User', function($http) {
			var backendUrl = "http://localhost:3000";  
			var service = {
				user: {},
				setName: function(newName) { 
					service.user['name'] = newName; 
				},
				setEmail: function(newEmail) {
					service.user['email'] = newEmail;
				},
				save: function() {
					return $http.post(backendUrl + '/users', {
						user: service.user
					});
				}
			};  
			return service;
		});

>在应用里面使用`factory()`方法,简单地注入就可以了

	angular
		.module('myApp')
		.controller('MainCtrl', function($scope, User) {
		  $scope.saveUser = User.save;
		});

***

###service
>service()通过构造函数的方式让我们创建service，我们可以使用原型模式替代javaScript原始的对象来定义service。
	
	angular
		.module('myApp.services')
		.service('User', function($http) {
			var self = this; // Save reference
			this.user = {};
			this.backendUrl = "http://localhost:3000";
			this.setName = function(newName) {
				self.user['name'] = newName;
			}
			this.setEmail = function(newEmail) {
				self.user['email'] = newEmail;
			}
			this.save = function() {
				return $http.post(self.backendUrl + '/users', {
					user: self.user
				})
			}
		});

>在应用里面使用`service()`方法,简单地注入就可以了

	angular
		.module('myApp')
		.controller('MainCtrl', function($scope, User) {
		  $scope.saveUser = User.save;
		});

***

###provider
>`provider()`是创建`service`最底层的方式，这也是唯一一个可以使用`.config()`方法配置创建`service`的方法

	angular
		.module('myApp.services')
		.provider('User', function() {

			this.backendUrl = "http://localhost:3000";

			this.setBackendUrl = function(newUrl) {
				if (url) this.backendUrl = newUrl;
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

>在应用里面`.config()`方法使用`provider()`方法

	angular
		.module('myApp')
		.config(function(UserProvider) {
			UserProvider.setBackendUrl("http://myApiBackend.com/api");
		})

>在应用里面其他方法中使用`provider()`方法,简单地注入就可以了
	
	angular
		.module('myApp')
		.controller('MainCtrl', function($scope, User) {
			$scope.saveUser = User.save;
		});

#总结
>1. 当我们希望在应用开始前对`service`进行配置的时候就需要使用到`provider()`;
>2. 当我们打算发布开源`provider()`也是首选创建`service`的方法，这样就可以使用配置的方式来配置`services`而不是将配置数据硬编码写到代码里面。
>3. 将配置数据硬编码写到代码里面`factory()`
