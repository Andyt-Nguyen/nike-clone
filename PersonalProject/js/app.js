var NikeApp = angular.module('NikeApp',['ui.router']);

NikeApp.config(function($stateProvider, $urlRouterProvider){
	$stateProvider
	.state('home',{
		url:'/',
		templateUrl:'./views/home.html'
	})
	.state('men',{
		url:'/men',
		templateUrl: './views/men.html',
		controller: 'NikeMenController'
	})
	.state('women',{
		url: '/women',
		templateUrl: './views/women.html',
		controller: "NikeWomenController"
	})
	.state('boys', {
		url: '/boys',
		templateUrl: './views/boys.html',
		controller: 'NikeBoysController'
	})
	.state('girls',{
		url:'/girls',
		templateUrl: './views/girls.html',
		controller: 'NikeGirlController'
	})
	$urlRouterProvider
	.otherwise('/')
});
