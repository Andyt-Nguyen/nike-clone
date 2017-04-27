var NikeApp = angular.module('NikeApp',['ui.router']);

NikeApp.config(function($stateProvider, $urlRouterProvider){
	$stateProvider
	.state('home',{
		url:'/',
		templateUrl:'./views/mainviews/home.html'
	})
	.state('men',{
		url:'/men',
		templateUrl: './views/mainviews/men.html',
		controller: 'NikeMenController'
	})
	.state('women',{
		url: '/women',
		templateUrl: './views/mainviews/women.html',
		controller: "NikeWomenController"
	})
	.state('boys', {
		url: '/boys',
		templateUrl: './views/mainviews/boys.html',
		controller: 'NikeBoysController'
	})
	.state('girls',{
		url:'/girls',
		templateUrl: './views/mainviews/girls.html',
		controller: 'NikeGirlController'
	})
	.state('mproduct', {
		url:'/mens-shoes',
		templateUrl: './views/productsviews/menshoes.html'
	})
	$urlRouterProvider
	.otherwise('/')
});
