var NikeApp = angular.module('NikeApp',['ui.router']);

NikeApp.config(function($stateProvider, $urlRouterProvider){
	$stateProvider
	.state('home',{
		url:'/',
		templateUrl:'pages/homepage.html'
	})
	.state('men',{
		url:'/men',
		templateUrl: 'views/men.html',
		controller: 'NikeMenController'
	})
	.state('women',{
		url: '/women',
		templateUrl: 'views/women.html',
		controller: "NikeWomenController"
	})

	$urlRouterProvider
	.otherwise('/')
});
