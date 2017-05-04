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

/////////////////
//Product Views//
////////////////

	//Men Products
	.state('mproduct', {
		url:'/mens-shoes',
		templateUrl: './views/productsviews/menshoes.html',
		controller: 'MensProdController'
	})

	.state('mLifeStyle', {
		url:'/mens-lifestyle',
		templateUrl:'./views/productsviews/mensviews/lifestyle.html',
		controller:'MensProdController'
	})

	.state('mRun', {
		url:'/mens-running',
		templateUrl:'./views/productsviews/mensviews/runstyle.html',
		controller: 'MensProdController'
	})

	.state('mBasketball', {
		url:'/mens-basketball',
		templateUrl:'./views/productsviews/mensviews/baskstyle.html',
		controller:'MensProdController'
	})

	.state('mSoccer', {
		url:'/mens-soccer',
		templateUrl: './views/productsviews/mensviews/soccer.html',
		controller:'MensProdController'
	})

	.state('mTraining', {
		url:'/mens-training-gym',
		templateUrl:'./views/productsviews/mensviews/training.html',
		controller:'MensProdController'
	})





	//NikeWomen
	.state('wproduct', {
		url: '/womens-shoes',
		templateUrl: './views/productsviews/womenshoes.html',
		controller: 'WomensProdController'
	})













	.state('bproduct', {
		url: '/boys-shoes',
		templateUrl: './views/productsviews/boyshoes.html',
		controller: "BoysProductController"
	})



	//Nike Girls
	.state('gproduct', {
		url: '/girls-shoes',
		templateUrl: './views/productsviews/girlviews/gallshoes.html',
		controller: "GirlsProdController"
	})

	//Section Views Views For Specific Products
	.state('gLifeStyle', {
		templateUrl: './views/productsviews/girlviews/lifestyle.html',
		controller: 'GirlsProdController'
	})
	.state('gRunningStyle', {
		templateUrl: './views/productsviews/girlviews/running.html',
		controller: 'GirlsProdController'
	})
	.state('gBasketBallStyle', {
		templateUrl: './views/productsviews/girlviews/basketball.html',
		controller: 'GirlsProdController'
	})
	.state('gSoccerStyle', {
		templateUrl: './views/productsviews/girlviews/soccer.html',
		controller: 'GirlsProdController'
	})
	.state('gJordanStyle', {
		templateUrl: './views/productsviews/girlviews/jordan.html',
		controller: 'GirlsProdController'
	})




	//CheckOut Views
	.state('checkout', {
		url: "/checkout",
		templateUrl: "views/productsviews/checkout.html"
	})
	.state('success', {
		url: '/success',
		templateUrl: "views/productsviews/success.html"
	})
	.state('shoe', {
		url:'/shoe',
		templateUrl: 'views/productsviews/productinfoview/productinfo.html'
	})


	$urlRouterProvider
	.otherwise('/')
});
