angular
.module 'nagasari', ['ui.bootstrap', 'ngRoute']
.config ($routeProvider, $locationProvider) ->
	$locationProvider.html5Mode(false).hashPrefix('!')

	$routeProvider
		.when '/login',
			templateUrl: 'views/login.html'
		.when '/register',
			templateUrl: 'views/register.html'
