var NikeApp = angular.module('NikeApp',['ui.router', 'ngAnimate']);

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
	.state('customize', {
		url:'/customize',
		templateUrl: './views/mainviews/customize.html',
		controller: 'NikeCustomizeController'
	})
	.state('mproduct', {
		url:'/mens-shoes',
		templateUrl: './views/productsviews/menshoes.html'
	})
	.state('wproduct', {
		url: '/womens-shoes',
		templateUrl: './views/productsviews/womenshoes.html'
	})
	.state('bproduct', {
		url: '/boys-shoes',
		templateUrl: './views/productsviews/boyshoes.html'
	})
	.state('gproduct', {
		url: '/girls-shoes',
		templateUrl: '/views/productsviews/girlsshoes.html',
		controller: "GirlsProdController"
	})
	.state('checkout', {
		url: "/checkout",
		templateUrl: "views/productsviews/checkout.html"
	})
	.state('/success', {
		url: '/success',
		templateUrl: "views/productsviews/success.html"
	})
	.state('/shoe', {
		url:'/shoe',
		templateUrl: 'views/productsviews/productinfoview/productinfo.html'
	})


	$urlRouterProvider
	.otherwise('/')
});
